import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export type Note = {
  id: string;
  title: string;
  text: string;
};

const initialState: { notes: Note[] } = {
  notes: [{ id: nanoid(), title: "Default title", text: "Default text" }],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: {
      reducer: (state, { payload }: PayloadAction<Note>) => {
        state.notes.push(payload);
      },
      prepare: (title, text) => {
        return { payload: { id: nanoid(), title, text } };
      },
    },
    updateNote: (state, { payload: { id, title, text } }) => {
      const updatedNote = state.notes.find((note) => note.id === id);
      if (updatedNote) {
        updatedNote.title = title;
        updatedNote.text = text;
      }
    },
    deleteNote: (state, { payload: { id } }) => {
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
});

export const notesSelectors = {
  selectAllNotes: (state: RootState) => state.notes.notes,
  selectCurrentNote: (state: RootState) =>
    state.notes.notes.find((note) => note.id === state.modal.noteId),
};

export const { createNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
