import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import notesReducer from "./notesSlice";

const preloadedState = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes") as string)
  : undefined;

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("notes", JSON.stringify(store.getState()));
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
