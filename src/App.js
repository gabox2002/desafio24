import React, { useState } from 'react';
import './styles/App.scss';
import NoteForm from './components/Form';
import NoteList from './components/List';

function App() {
  const [notes, setNotes] = useState([]);
  const [editedNote, setEditedNote] = useState(null);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (id, updatedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, title: updatedNote.title, content: updatedNote.content } : note
      )
    );
    setEditedNote(null);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleFavorite = (id) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, favorite: !note.favorite } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notas</h1>
      <NoteForm addNote={addNote} editNote={editNote} editedNote={editedNote} />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        toggleFavorite={toggleFavorite}
        setEditedNote={setEditedNote} 
      />
    </div>
  );
}

export default App;
