import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main>
      <AddNoteForm />
      <NotesList />
    </main>
  );
};

export default App;
