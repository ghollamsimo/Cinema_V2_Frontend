import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService.ts";

export const register = createAsyncThunk(
    "auth/register",
    async ({ name, email, password, role }: { name: string; email: string; password: string; role: string }, { rejectWithValue }) => {
        try {
            const response = await AuthService.register({ name, email, password, role });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const res = await AuthService.login({ email, password });
            const token = res.data.token;
            localStorage.setItem("token", token);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);