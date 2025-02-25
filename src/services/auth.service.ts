import type { LoginType, RegisterType } from "@/types/auth.type";
import axios from "axios";

class AuthService {
    private authUrl = `${process.env.NEXT_PUBLIC_API_URL}/session`;

    public async register(dto: RegisterType) {
        const response = await axios.post(`${this.authUrl}/register`, dto, {withCredentials: true});
        return response.data;
    }

    public async login(dto: LoginType) {
        const response = await axios.post(`${this.authUrl}/login`, dto, {withCredentials: true});
        return response.data;
    }

    public async logout(dto: LoginType) {
        const response = await axios.post(`${this.authUrl}/login`, dto, {withCredentials: true});
        return response.data;
    }
}

export default new AuthService();