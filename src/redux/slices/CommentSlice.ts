import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CommentService from "../../services/CommentService.ts";
import { initialState } from "../initialisation.ts";

export const storeComment = createAsyncThunk(
    "comment/store",
    async ({ comment, client_id , film_id}, { rejectWithValue }) => {  // Ensure correct parameter destructuring
        try {
            const response = await CommentService.create({ comment, client_id }, film_id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const commentSlice = createSlice({
    name: 'comment',
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
            .addCase(storeComment.pending, (state) => {
                state.loading = true;
            })
            .addCase(storeComment.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(storeComment.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Failed to fetch film.";
            });
    },
});

export const { changeStateTrue, changeStateFalse, clearResponse, addComment, clearComments  } = commentSlice.actions;
export default commentSlice.reducer;