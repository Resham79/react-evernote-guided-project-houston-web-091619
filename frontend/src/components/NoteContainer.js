import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    showForm: false,
  }


  displayForm = () => {
    this.setState ({
      showForm: true
    })
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <Sidebar notes={this.props.notes} 
          selectNote={this.props.selectNote} 
          displayForm = {this.displayForm}
          
          />
          <Content 
          selectedNote = {this.props.selectedNote} 
          editNote = {this.props.editNote} 
          content={this.props.content} 
          saveEditNote = {this.props.saveEditNote}
          showForm={this.state.showForm}
          saveNewNote = {this.props.saveNewNote}
          cancelEdit = {this.props.cancelEdit}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
