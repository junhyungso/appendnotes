import { useState } from 'react';
import styles from './ListOfNotes.module.css';
import Note from './Note';

const ListOfNotes = ({ notes, setNotes }) => {
  const [firstNoteSelect, setFirstNoteSelect] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState({
    title: '',
    text: '',
    id: 0,
  });

  const handleCardClick = (id) => {
    if (firstNoteSelect === '') {
      setFirstNoteSelect(id);
    } else {
      handleSwap(id);
    }
  };

  const handleEditNoteClick = (id) => {
    setIsEditing(true);

    const editingNote = notes.filter((note) => {
      return note.id === id;
    })[0];
    setEditingNote(editingNote);
  };

  const handleSwap = (secondId) => {
    const firstNote = notes.filter((note) => {
      return note.id === firstNoteSelect;
    })[0];
    const secondNote = notes.filter((note) => {
      return note.id === secondId;
    })[0];

    const swappingNotes = [...notes];

    const firstIndex = swappingNotes.indexOf(firstNote);
    const secondIndex = swappingNotes.indexOf(secondNote);

    [swappingNotes[firstIndex], swappingNotes[secondIndex]] = [
      swappingNotes[secondIndex],
      swappingNotes[firstIndex],
    ];

    setNotes(swappingNotes);
    setFirstNoteSelect('');
  };

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleEditNoteSubmit = (e) => {
    e.preventDefault();

    const newSubmittedNote = {
      id: Math.random() * 1000,
      title,
      text,
    };
    setNotes([...notes, newSubmittedNote]);
    setIsEditing(false);
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
    <>
      {notes.map((note, index) => {
        return (
          <ul key={index} className={styles.cardslist}>
            <Note
              note={note}
              handleCardClick={handleCardClick}
              handleEditNoteClick={handleEditNoteClick}
            />
          </ul>
        );
      })}
      {isEditing && (
        <div>
          <dialog open={isEditing} className={styles.addmodal}>
            <button
              className={styles.closebutton}
              onClick={() => {
                setIsEditing(false);
              }}
            >
              X
            </button>
            <form>
              <div className={styles.title}>
                <label>Title: </label>
                <input
                  type="text"
                  value={editingNote.title}
                  onChange={handleTitleInput}
                />
              </div>
              <div className={styles.text}>
                <label>Text: </label>
                <textarea value={editingNote.text} onChange={handleTextInput} />
              </div>
              <button
                className={styles.submitbutton}
                onClick={handleEditNoteSubmit}
              >
                Submit
              </button>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};

export default ListOfNotes;
