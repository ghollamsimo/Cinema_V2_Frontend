import Api from '../api/Api.ts'

class ReservationService {
    private http: ReturnType<typeof Api>;
    constructor() {
        this.http = Api();
    }

    create(session_id, seat){
        return this.http.post(`/reservation/store/${session_id}`, seat)
    }
}

export default new ReservationService()