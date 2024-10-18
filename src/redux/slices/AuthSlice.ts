import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {initialState} from "../initialisation.ts";
import AuthService from "../../services/AuthService.ts";

export const register = createAsyncThunk(
    "auth/register",
    async ({ name, email, password, role }, { rejectWithValue }) => {
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
    async ({email, password} , {rejectWithValue}) => {
        try {
            const res = await AuthService.login({email, password})
            return res.data
        }catch (err) {
            return rejectWithValue(err.response?.data || err.message);

        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Registration failed";
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Login failed";
            });
    },
});

export default authSlice.reducer;