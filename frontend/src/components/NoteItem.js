import React from 'react';

function truncate(str) {
  return str.length > 10 ? str.substring(0, 12) + "..." : str;
}

const NoteItem = (props) => (
  <li onClick = {() => props.selectNote(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{truncate(props.note.body)}</p>
  </li> 
);

export default NoteItem;
