import React from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";

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
    <section>
      <h2>Add new note</h2>
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
            value={formik.values.text}
            onChange={formik.handleChange}
            required
          />
        </Form.Group>
        <Button size="lg" variant="primary" type="submit">
          Save note
        </Button>
      </Form>
    </section>
  );
};

export default AddNoteForm;
