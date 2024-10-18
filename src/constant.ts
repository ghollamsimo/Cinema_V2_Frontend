interface ConfigOptions {
    baseURL: string;
    headers: {
        'Content-Type': string;
        'Authorization': string;
    };
}

interface AuthState {
    loading: boolean;
    datalist: any[];
    dataObj: any;
    errorMessage: string | null;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    role: string;
}

interface LoginData {
    email: string;
    password: string;
}

interface LogoutData {
    token: string;
}