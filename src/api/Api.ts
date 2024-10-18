import {Config} from "../helpers/Config.ts";
import axios from "axios";

const Api = () => {
    return axios.create(Config()) ;
}

export default Api;