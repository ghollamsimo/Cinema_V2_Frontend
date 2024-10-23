import {AuthState} from "../constant.ts";

export const initialState: AuthState = {
    loading: false,
    datalist: [],
    dataObj: {},
    errorMessage: null,
    token: null,
};