import React from "react";
import { useFormik } from "formik";
import { Form, Button, Card } from "react-bootstrap";

import { useAppDispatch } from "../slices/store";
import { createNote } from "../slices/notesSlice";

const AddNoteForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    validateOnChange: false,
    onSubmit: ({ title, text }, { resetForm }) => {
      dispatch(createNote(title, text));
      resetForm();
    },
  });

  return (
    <Card as="section">
      <Card.Header as="h2">Add new note</Card.Header>
      <Card.Body>
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
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Text:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="text"
              placeholder="Enter your note here"
              value={formik.values.text}
              onChange={formik.handleChange}
              required
            />
          </Form.Group>
          <Button size="lg" variant="success" type="submit">
            Save note
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddNoteForm;
