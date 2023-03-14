import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import throttle from "lodash.throttle";

import notesReducer from "./notesSlice";
import modalReducer from "./modalSlice";

const preloadedState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes") as string)
    : undefined,
  modal: undefined,
};

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    modal: modalReducer,
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    localStorage.setItem("notes", JSON.stringify(store.getState().notes));
  }, 1000)
);

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
