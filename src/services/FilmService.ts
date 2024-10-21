import Api from "../api/Api.ts";

class FilmService {
    private http: ReturnType<typeof Api>;
    constructor() {
        this.http = Api();
    }
    getFilms() : Promise<any>{
        return this.http.get('/films/index')
    }

    getFilm(id:string) : Promise<any>{
        return this.http.get(`/films/show/${id}`)
    }

}

export default new FilmService()