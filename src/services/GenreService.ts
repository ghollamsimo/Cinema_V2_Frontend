import Api from "../api/Api.ts";
class GenreService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

}

export default new GenreService()