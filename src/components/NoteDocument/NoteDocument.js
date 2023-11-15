import { useState } from 'react';
import AddNote from '../AddNote/AddNote';
import ListOfNotes from '../ListOfNotes/ListOfNotes';
import styles from './NoteDocument.module.css';

const NoteDocument = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.document}>
      <h1>Note Taker</h1>
      <div>
        <button className={styles.addbutton} onClick={() => setShowModal(true)}>
          Add New Note
        </button>
      </div>
      <div>
        <h4>Click Two Notes to Swap Them!</h4>
      </div>
      {showModal && (
        <AddNote
          showModal={showModal}
          setShowModal={setShowModal}
          notes={notes}
          setNotes={setNotes}
        />
      )}
      <ListOfNotes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default NoteDocument;
