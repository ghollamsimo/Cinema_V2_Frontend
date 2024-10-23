import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import RatingService from "../../services/RatingService.ts";
import { initialState } from "../initialisation.ts";

export const storeRate = createAsyncThunk(
    "rating/store",
    async ({ rate, film_id, client_id }, { rejectWithValue }) => {
        try {
            const response = await RatingService.store(rate, film_id, client_id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
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
            .addCase(storeRate.pending, (state) => {
                state.loading = true;
            })
            .addCase(storeRate.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(storeRate.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Failed to fetch film.";
            });
    },
});

export const { changeStateTrue, changeStateFalse, clearResponse, addComment, clearComments  } = ratingSlice.actions;
export default ratingSlice.reducer;