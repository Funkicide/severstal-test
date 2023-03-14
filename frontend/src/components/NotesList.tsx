import { useAppDispatch, useAppSelector } from "../slices/store";
import { Card, Button, Stack } from "react-bootstrap";

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
    <Card key={note.id} as="article" className="mb-3">
      <Card.Header as="h3">{note.title}</Card.Header>
      <Card.Body>
        <Card.Text>{note.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary" onClick={handleEdit(note.id)}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={handleDelete(note.id)}>
            Delete
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  ));

  return (
    <section>
      <Card className="mb-3">
        <Card.Header as="h3">Notes</Card.Header>
      </Card>
      {renderedNotes}
    </section>
  );
};

export default NotesList;
