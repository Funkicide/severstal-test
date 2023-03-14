import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";

const App = () => {
  return (
    <main>
      <AddNoteForm />
      <NotesList />
    </main>
  );
};

export default App;
