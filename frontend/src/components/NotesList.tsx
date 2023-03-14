import { useAppDispatch, useAppSelector } from "../slices/store";

import { notesSelectors } from "../slices/notesSlice";
import { deleteNote } from "../slices/notesSlice";
import { openModal } from "../slices/modalSlice";

const NotesList = () => {
  const dispatch = useAppDispatch();

  const notes = useAppSelector(notesSelectors.selectAllNotes);

  const handleEdit = (id: string) => () => {
    dispatch(openModal(id));
  };

  const handleDelete = (id: string) => () => {
    dispatch(deleteNote({ id }));
  };

  const renderedNotes = notes.map((note) => (
    <article key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <button type="button" onClick={handleEdit(note.id)}>
        Edit
      </button>
      <button type="button" onClick={handleDelete(note.id)}>
        Delete
      </button>
    </article>
  ));

  return (
    <section>
      <h2>Notes</h2>
      {renderedNotes}
    </section>
  );
};

export default NotesList;
