import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type Note = {
  id: string;
  title: string;
  text: string;
};

const initialState: Note[] = [
  { id: nanoid(), title: "Default title", text: "Default text" },
];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: {
      reducer: (state, { payload }: PayloadAction<Note>) => {
        state.push(payload);
      },
      prepare: (title, text) => {
        return { payload: { id: nanoid(), title, text } };
      },
    },
    updateNote: (state, { payload: { id } }) => {
      const updatedNote = state.filter((note) => note.id === id);
      console.log(updatedNote);
    },
    deleteNote: (state, { payload: { id } }) => {
      return (state = state.filter((note) => note.id !== id));
    },
  },
});

export const notesSelectors = {
  selectAllNotes: (state: RootState) => state.notes,
};

export const { createNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
