import Api from "../api/Api.ts";

class RatingService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    store(rate: number, film_id: string, client_id: string): Promise<any> {
        const token = localStorage.getItem('token');
        return this.http.post(
            `/rating/store/${film_id}`,
            { rate },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    }
}

export default new RatingService();
