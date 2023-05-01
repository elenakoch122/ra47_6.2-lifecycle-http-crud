import Button from "./Button";

export default function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <p className="note__text">{note.content}</p>
      <Button icon="&#10006;" color="red" fontSize="1.2rem" element="note" callback={() => deleteNote(note.id)} />
    </div>
  );
}
