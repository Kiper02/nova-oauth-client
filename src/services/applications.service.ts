import type { LoginType, RegisterType } from "@/types/auth.type";
import axios from "axios";

class ApplicationsService {
    private authUrl = `${process.env.NEXT_PUBLIC_API_URL}/session`;

    public async create(dto: RegisterType) {
        const response = await axios.post(`${this.authUrl}/register`, dto, {withCredentials: true});
        return response.data;
    }

    public async findAll(dto: LoginType) {
        const response = await axios.post(`${this.authUrl}/login`, dto, {withCredentials: true});
        return response.data;
    }

    public async delete(dto: LoginType) {
        const response = await axios.post(`${this.authUrl}/login`, dto, {withCredentials: true});
        return response.data;
    }
}

export default new ApplicationsService();