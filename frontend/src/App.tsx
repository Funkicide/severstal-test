import { Container, Row, Col } from "react-bootstrap";

import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";
import EditModal from "./components/EditModal";

import "./App.scss";

const App = () => {
  return (
    <Container as="main" fluid="md">
      <Row className="mt-4" xs={1} md={2}>
        <Col className="mb-3">
          <AddNoteForm />
        </Col>
        <Col>
          <NotesList />
          <EditModal />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
