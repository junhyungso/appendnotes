import styles from './Note.module.css';

const Note = ({ note, handleCardClick }) => {
  return (
    <div
      tabIndex={-1}
      className={styles.notecard}
      onClick={() => handleCardClick(note.id)}
    >
      <h3>{note.title}</h3>
      <p>{note.text}</p>
    </div>
  );
};

export default Note;
