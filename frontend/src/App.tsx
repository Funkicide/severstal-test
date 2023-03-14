import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";
import EditModal from "./components/EditModal";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main>
      <AddNoteForm />
      <NotesList />
      <EditModal />
    </main>
  );
};

export default App;
