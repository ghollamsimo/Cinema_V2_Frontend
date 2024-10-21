import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FilmService from "../../services/FilmService.ts";
import { initialState } from "../initialisation.ts";


export const films = createAsyncThunk(
    "films/index",
    async (_, { rejectWithValue }) => {
        try {
            const response = await FilmService.getFilms();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const fetchFilmById = createAsyncThunk(
    "films/show/id",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await FilmService.getFilm(id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);



const filmSlice = createSlice({
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
            .addCase(films.pending, (state) => {
                state.loading = true;
            })
            .addCase(films.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.datalist = action.payload;
                state.errorMessage = null;
            })
            .addCase(films.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Failed to fetch films.";
            })
            .addCase(fetchFilmById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilmById.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })

    },
});

export const { changeStateTrue, changeStateFalse, clearResponse, } = filmSlice.actions;
export default filmSlice.reducer;