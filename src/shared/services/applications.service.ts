import type { LoginType, RegisterType } from "@/shared/types/auth.type";
import axios from "axios";

class ApplicationsService {
  private authUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

  public async create(dto: RegisterType) {
    const response = await axios.post(`${this.authUrl}/session/register`, dto, {
      withCredentials: true,
    });
    return response.data;
  }

  public async findAll(dto: LoginType) {
    const response = await axios.post(`${this.authUrl}/session/login`, dto, {
      withCredentials: true,
    });
    return response.data;
  }

  public async delete(dto: LoginType) {
    const response = await axios.post(`${this.authUrl}/session/login`, dto, {
      withCredentials: true,
    });
    return response.data;
  }

  public async findScope() {
    const response = await axios.get(`${this.authUrl}/application/scope`, {
      withCredentials: true,
    });
    return response.data;
  }
}

export default new ApplicationsService();
