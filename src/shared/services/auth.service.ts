import type { LoginType, RegisterType, UpdatedType } from "@/shared/types/auth.type";
import axios from "axios";

class AuthService {
  private authUrl = `${process.env.NEXT_PUBLIC_API_URL}/session`;

  public async register(dto: RegisterType) {
    const response = await axios.post(`${this.authUrl}/register`, dto, {
      withCredentials: true,
    });
    return response.data;
  }

  public async login(dto: LoginType) {
    const response = await axios.post(`${this.authUrl}/login`, dto, {
      withCredentials: true,
    });
    return response.data;
  }

  public async logout() {
    const response = await axios.post(`${this.authUrl}/logout`, {}, {
      withCredentials: true,
    });
    return response.data;
  }

  public async findProfile() {
    const response = await axios.get(`${this.authUrl}/profile`, {
      withCredentials: true,
    });
    return response.data;
  }

  public async updateProfile(dto: UpdatedType) {
    const response = await axios.put(`${this.authUrl}`, dto, {
      withCredentials: true,
    });
    return response.data;
  }
}

export default new AuthService();
