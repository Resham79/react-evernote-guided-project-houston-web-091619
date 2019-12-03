import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {/* Render list of notes here... */}
      {props.notes.map((note) => 
            <NoteItem 
            selectNote = {props.selectNote}
            note = {note}
            />
            )}
      
    </ul>
  );
}

export default NoteList;
