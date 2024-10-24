import Api from "../api/Api.ts";

class SessionService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    getSessions(film_id): Promise<any> {
        return this.http.get(`/session/show/${film_id}`)
    }

}

export default new SessionService()