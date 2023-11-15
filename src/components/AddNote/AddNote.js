import { useState } from 'react';
import styles from './AddNote.module.css';

const AddNote = ({ showModal, setShowModal, notes, setNotes }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleNewNoteSubmit = (e) => {
    e.preventDefault();

    const newSubmittedNote = {
      id: Math.random() * 1000,
      title,
      text,
    };
    setNotes([...notes, newSubmittedNote]);
    setShowModal(false);
    setTitle('');
    setText('');
  };

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleTextInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <dialog open={showModal} className={styles.addmodal}>
        <button
          className={styles.closebutton}
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </button>
        <form>
          <div className={styles.title}>
            <label>Title: </label>
            <input type="text" onChange={handleTitleInput} />
          </div>
          <div className={styles.text}>
            <label>Text: </label>
            <textarea onChange={handleTextInput} />
          </div>
          <button className={styles.submitbutton} onClick={handleNewNoteSubmit}>
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default AddNote;
