import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/AuthSlice.ts'

export const store = configureStore({
    reducer: {
        authentification: authSlice
    },
});
