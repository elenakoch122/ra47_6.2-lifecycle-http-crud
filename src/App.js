import './App.css';
import Button from './components/Button';
import Note from './components/Note';

function App() {
  return (
    <div className="notes">
      <header className="header">
        <h1 className="header__title">Notes</h1>
          <Button icon="&#8634;" color="#25df25" fontSize="1.5rem" />
      </header>

      <ul className="notes__list">
        <li className="notes__item"><Note /></li>
        <li className="notes__item"><Note /></li>
        <li className="notes__item"><Note /></li>
        <li className="notes__item"><Note /></li>
        <li className="notes__item"><Note /></li>
      </ul>

      <footer className="footer">
        <h2 className="footer__title">New Note</h2>
        <div className="footer-wrapper">
          <textarea className="footer__text" cols="30" rows="5"></textarea>
          <Button icon="&#10148;" color="#25df25" fontSize="1.5rem" element="footer" />
        </div>
      </footer>
    </div>
  );
}

export default App;
