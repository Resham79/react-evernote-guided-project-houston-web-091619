import React, { Component } from 'react';

class NoteEditor extends Component {

state = {
   title: " ",
   body: " " 
}

handleChange = (e)=>{
  this.setState({
  [e.target.name]: e.target.value
  // console.log('some')
})
}

postChanges = (e) => {
  e.preventDefault()
  fetch(`http://localhost:3000/api/v1/notes`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: this.state.title,
      body: this.state.body
    })
  })
  .then(response => response.json())
  .then(newNote =>  {
    // console.log("inside fetch")
    this.props.saveNewNote(newNote)
  })
}


  render() {
    
    return (
      <form className="note-editor">
        <input type="text" placeholder = "title" name= 'title' defaultValue = '' onChange = {(e) => this.handleChange(e)}  />
        <textarea type="text" placeholder = "body" name= "body" defaultValue = ' '
        onChange = {(e) => this.handleChange(e)}  />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick = {(e) => {this.postChanges(e)}}  />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;