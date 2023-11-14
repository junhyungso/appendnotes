import { useState } from 'react';
import styles from './ListOfNotes.module.css';
import Note from './Note';

const ListOfNotes = ({ notes, setNotes }) => {
  const [firstNoteSelect, setFirstNoteSelect] = useState('');

  const handleCardClick = (id) => {
    if (firstNoteSelect === '') {
      setFirstNoteSelect(id);
    } else {
      handleSwap(id);
    }
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

  return notes.map((note, index) => {
    return (
      <ul key={index} className={styles.cardslist}>
        <Note note={note} handleCardClick={handleCardClick} />
      </ul>
    );
  });
};

export default ListOfNotes;
