import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import SessionService from "../../services/SessionService.ts";
import {initialState} from "../initialisation.ts";

export const fetchSession = createAsyncThunk(
    "session/show/id",
    async (film_id: string, { rejectWithValue }) => {
        try {
            const response = await SessionService.getSessions(film_id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const sessionSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<any>) => {
            state.comments.push(action.payload);
        },
        clearComments: (state) => {
            state.comments = [];
        },
        changeStateTrue: (state) => {
            state.updateState = true;
        },
        changeStateFalse: (state) => {
            state.updateState = false;
        },
        clearResponse: (state) => {
            state.errorMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSession.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSession.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.datalist = action.payload;
                state.errorMessage = null;
            })
            .addCase(fetchSession.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Failed to fetch films.";
            })
    },
});

export const { changeStateTrue, changeStateFalse, clearResponse, } = sessionSlice.actions;
export default sessionSlice.reducer;