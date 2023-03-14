import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../slices/store";

import { createNote } from "../slices/notesSlice";

const AddNoteForm = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const isValid = !!title && !!text;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleNoteSave = () => {
    if (isValid) {
      dispatch(createNote(title, text));

      setTitle("");
      setText("");
    }
  };

  return (
    <section>
      <h2>Add new note</h2>
      <form>
        <label htmlFor="noteTitle">Note Title:</label>
        <input
          type="text"
          id="noteTitle"
          name="noteTitle"
          value={title}
          placeholder="Enter note title here"
          onChange={handleTitleChange}
        />
        <label htmlFor="noteText">Text:</label>
        <textarea
          id="noteText"
          name="noteText"
          value={text}
          placeholder="Enter your note here"
          onChange={handleTextChange}
        />
        <button disabled={!isValid} type="button" onClick={handleNoteSave}>
          Save
        </button>
      </form>
    </section>
  );
};

export default AddNoteForm;
