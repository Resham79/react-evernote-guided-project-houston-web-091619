import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import Search from './Search'

class App extends Component {

  state = {
    notes: [],
    selectedNote: {},
    content: "noteViewer",
    searchTerm: ""
  }

  saveNewNote = (newNote) => {
    // console.log("this is updateNote")
    let arr = [...this.state.notes, newNote]
    this.setState({
      notes: arr
    })
  }

  saveEditNote = (e, title, body) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${this.state.selectedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    })
      .then(response => response.json())
      .then(newNote => {
        let updatedNotes = this.state.notes.map(note => {
          if(note.id === newNote.id){
            // debugger
            return newNote
          }
          return note
        })

        this.setState({
          notes: updatedNotes,
          selectNote: newNote
        })
      })
  }

  editNote = () => {
    this.setState({
      content: "noteEditor"
    })
  }

  cancelEdit = () => {
    this.setState({
      content: "noteViewer"
    })
  }

  selectNote = (selectedNote) => {
    // console.log(selectedNote)
    this.setState({
      selectedNote: selectedNote,
      content: 'noteViewer'
    })
  }

  setSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/notes`)
      .then(res => res.json())
      .then(x => this.setState({ notes: x }))
  }

  render() {
    const searchNotes = this.state.notes.filter(note => note.title.includes(this.state.searchTerm))
    console.log(this.state.notes, searchNotes)
    return (
      <div className="app">
        <Header />
        <Search onSearchChange={this.setSearchTerm} />
        <NoteContainer
          selectNote={this.selectNote}
          selectedNote={this.state.selectedNote}
          editNote={this.editNote}
          content={this.state.content}
          saveEditNote={this.saveEditNote}
          saveNewNote={this.saveNewNote}
          cancelEdit={this.cancelEdit}
          notes={searchNotes}
        />
      </div>
    );
  }
}

export default App;
