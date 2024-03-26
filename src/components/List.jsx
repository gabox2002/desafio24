import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faStar as solidStar } from '@fortawesome/free-solid-svg-icons'; 
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import '../styles/App.scss'; 

function NoteList({ notes, deleteNote, toggleFavorite, setEditedNote }) {
  return (
    <div className="noteList">
      {notes.map(note => (
        <div className="notes" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button className="action-button edit-button" onClick={() => setEditedNote(note)}>
            <FontAwesomeIcon icon={faEdit} title="Editar" />
          </button>
          <button className="action-button delete-button" onClick={() => deleteNote(note.id)}>
            <FontAwesomeIcon icon={faTrash} title="Eliminar" />
          </button>
          <button className="action-button favorite-button" onClick={() => toggleFavorite(note.id)}>
            <FontAwesomeIcon icon={note.favorite ? solidStar : regularStar} title={note.favorite ? 'Quitar favorito' : 'Marcar como favorito'} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;


