import Api from "../api/Api.ts";
 class CommentService {

    private http: ReturnType<typeof Api>;
    constructor() {
        this.http = Api();
    }

    create(data: { comment: string;  client_id: string } , film_id): Promise<any> {
        return this.http.post(`/comment/store/${film_id}`, data);
    }
}

export default new CommentService()