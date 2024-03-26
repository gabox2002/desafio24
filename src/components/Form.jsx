import React, { useState, useEffect } from 'react';

function NoteForm({ addNote, editNote, editedNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editedNote) {
      setTitle(editedNote.title);
      setContent(editedNote.content);
    }
  }, [editedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    if (editedNote) {
      editNote(editedNote.id, { title, content });
    } else {
      addNote({
        id: Date.now(),
        title,
        content,
        favorite: false
      });
    }
    setTitle('');
    setContent('');
  };

  return (
    <div className='noteForm'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">{editedNote ? 'Guardar Nota' : 'Agregar Nota'}</button>
      </form>
    </div>
  );
}

export default NoteForm;
