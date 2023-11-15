import styles from './Note.module.css';

const Note = ({ note, handleCardClick, handleEditNoteClick }) => {
  return (
    <div
      tabIndex={-1}
      className={styles.notecard}
      onClick={() => handleCardClick(note.id)}
    >
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <button onClick={() => handleEditNoteClick(note.id)}>Edit</button>
    </div>
  );
};

export default Note;
