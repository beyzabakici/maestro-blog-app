import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDisparch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDisparch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
