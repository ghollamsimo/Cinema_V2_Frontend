import Api from "../api/Api.ts";

class AuthService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }


    register(data: RegisterData): Promise<any> {
        return this.http.post('/auth/register', data);
    }


    login(data: LoginData): Promise<any> {
        return this.http.post('/auth/login', data);
    }


    logout(data: LogoutData): Promise<any> {
        return this.http.post('/auth/logout', data);
    }

    getToken(){
        return localStorage.getItem()
    }
}

export default new AuthService();