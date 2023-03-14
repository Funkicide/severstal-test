import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState = {
  show: false,
  noteId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload: id }) => {
      state.show = true;
      state.noteId = id;
    },
    closeModal: (state) => {
      state.show = false;
      state.noteId = null;
    },
  },
});

export const modalSelectors = {
  show: (state: RootState) => state.modal.show,
};

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
