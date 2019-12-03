import React, { Fragment } from 'react';
import NewNoteForm from './NewNoteForm'

const NoteViewer = (props) => {
  console.log(props)
  return (<div>
  {props.showForm
  ? <NewNoteForm  saveNewNote = {props.saveNewNote} />
  : <Fragment selectedNote = {props.selectedNote}>
    <h2>{props.selectedNote.title}</h2>
    <p>{props.selectedNote.body}</p>
    <button onClick = {() => props.editNote(props)}>Edit</button>
   </Fragment>}
  </div>
   
   
  );
}

export default NoteViewer;
