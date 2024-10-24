import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import ReservationService from "../../services/ReservationService.ts";
import {initialState} from "../initialisation.ts";

export const storeReservation = createAsyncThunk(
    "reservation/store/id",
    async (session_id: string, seat: string, { rejectWithValue }) => {
        try {
            const response = await ReservationService.create(session_id, seat);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const reservationSlice = createSlice({
    name: 'reservation',
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
            .addCase(storeReservation.pending, (state) => {
                state.loading = true;
            })
            .addCase(storeReservation.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.datalist = action.payload;
                state.errorMessage = null;
            })
            .addCase(storeReservation.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Failed to fetch films.";
            })
    },
});

export const { changeStateTrue, changeStateFalse, clearResponse, } = reservationSlice.actions;
export default reservationSlice.reducer;