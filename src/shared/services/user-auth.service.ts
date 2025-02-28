import axios, { AxiosResponse } from "axios";
import { AuthLoginType } from "../types/user-auth.type";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

class UserAuthService {
  private authUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth`;
  private resourceServer = `${process.env.NEXT_PUBLIC_RESOURCE_SERVER}/auth`;

  public async login(dto: AuthLoginType): Promise<any> {
    const response = await axios.post(`${this.authUrl}/login`, dto);
    return response.data;
  }

  public async code(dto: AuthLoginType): Promise<any> {
    const response = await axios.post(`${this.authUrl}/code`, dto);
    return response.data;
  }

  public async findProfile(): Promise<any> {
    let accessToken = Cookies.get("access_token");
    let refreshToken = Cookies.get("refresh_token");

    if (!accessToken && !refreshToken) return null;

    if (!accessToken) {
      const response = await axios.post(`${this.resourceServer}/auth/refresh`);
      if (!response || !response.data || !response.data.access_token) {
        return null;
      }
      this.setCookie(response.data.access_token, response.data.refresh_token);
      accessToken = response.data.access_token;
    }

    const userResponse = await axios.get(`${this.resourceServer}/user/info`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return userResponse.data;
  }

  private setCookie(accessToken: string, refreshToken: string) {
    const accessDecoded = jwtDecode(accessToken);
    const refreshDecoded = jwtDecode(refreshToken);

    const accessExpires = accessDecoded.exp ? new Date(accessDecoded.exp * 1000) : new Date(Date.now() + 3600000); 
    const refreshExpires = refreshDecoded.exp ? new Date(refreshDecoded.exp * 1000) : new Date(Date.now() + 2592000000);

    Cookies.set("access_token", accessToken, {
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict",
      expires: accessExpires, 
    });

    Cookies.set("refresh_token", refreshToken, {
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict",
      expires: refreshExpires, 
    });
  }
}

export default new UserAuthService();
