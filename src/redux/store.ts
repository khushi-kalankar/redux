import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}, //reducer handles events
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch