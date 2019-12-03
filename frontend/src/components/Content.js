import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  
  renderContent = () => {
    // console.log(this.props.content)
    if (this.props.content === "noteEditor") {
      return <NoteEditor 
      editNote = {this.props.editNote} 
      selectedNote= {this.props.selectedNote}
      saveEditNote = {this.props.saveEditNote}
      cancelEdit = {this.props.cancelEdit}
       />;
    } else //if (false) {
      return <NoteViewer 
      showForm={this.props.showForm} 
      selectedNote = {this.props.selectedNote} 
      editNote = {this.props.editNote}
      saveNewNote = {this.props.saveNewNote}
      />;
    // } else {
    //   return <Instructions />;
    // }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
