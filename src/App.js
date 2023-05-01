import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Note from './components/Note';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');

  const updateNotes = () => fetch(process.env.REACT_APP_MAIN_URL + '/notes')
    .then(res => res.json())
    .then(json => setNotes(json));

  useEffect(() => updateNotes, []);

  const onChange = (e) => setNewNoteText(e.target.value);

  const addNote = async (e) => {
    e.preventDefault();
    await fetch(process.env.REACT_APP_MAIN_URL + '/notes', {
      method: 'POST',
      body: newNoteText,
    });
    await updateNotes();
  };

  const deleteNote = async (id) => {
    await fetch(process.env.REACT_APP_MAIN_URL + `/notes/${id}`, {
      method: 'DELETE',
    });
    await updateNotes();
  };

  return (
    <div className="notes">
      <header className="header">
        <h1 className="header__title">Notes</h1>
        <Button icon="&#8634;" color="#25df25" fontSize="1.5rem" callback={updateNotes} />
      </header>

      <ul className="notes__list">
        {notes.map(n => <li className="notes__item" key={n.id}><Note note={n} deleteNote={deleteNote} /></li>)}
      </ul>

      <footer className="footer">
        <h2 className="footer__title">New Note</h2>
        <form className="footer-wrapper" onSubmit={addNote}>
          <textarea className="footer__text" cols="30" rows="5" onChange={onChange} value={newNoteText}></textarea>
          <Button icon="&#10148;" color="#25df25" fontSize="1.5rem" element="footer" />
        </form>
      </footer>
    </div>
  );
}
