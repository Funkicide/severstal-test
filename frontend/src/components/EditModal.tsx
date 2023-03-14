import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";

import { useAppDispatch, useAppSelector } from "../slices/store";
import { modalSelectors, closeModal } from "../slices/modalSlice";
import { notesSelectors, updateNote } from "../slices/notesSlice";

const EditModal = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(modalSelectors.show);
  const currentNote = useAppSelector(notesSelectors.selectCurrentNote);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: currentNote?.title,
      text: currentNote?.text,
    },
    validateOnChange: false,
    onSubmit: ({ title, text }) => {
      dispatch(updateNote({ id: currentNote?.id, title, text }));
      dispatch(closeModal());
    },
  });

  const handleHide = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      show={show}
      onHide={handleHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formik.values.title}
              placeholder="Enter note title"
              onChange={formik.handleChange}
              required
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Text:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              required
            />
          </Form.Group>
          <Button size="lg" variant="primary" type="submit">
            Save note
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
