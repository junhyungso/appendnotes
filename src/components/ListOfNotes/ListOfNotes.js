import styles from './ListOfNotes.module.css';

const ListOfNotes = ({ notes }) => {
  return notes.map((note, index) => {
    return (
      <ul key={index} className={styles.cardslist}>
        <div className={styles.notecard}>
          <h3>{note.title}</h3>
          <p>{note.text}</p>
        </div>
      </ul>
    );
  });
};

export default ListOfNotes;
