import React, { Component } from 'react';

class NoteEditor extends Component {
  state={
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    // console.log(this.props.selectedNote)
    return (
      <form className="note-editor">
        <input type="text" name="title" defaultValue={this.props.selectedNote.title} onChange={(e) => this.handleChange(e)} />
        <textarea name="body" defaultValue={this.props.selectedNote.body} onChange={(e) => this.handleChange(e)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={(e) => {this.props.saveEditNote(e, this.state.title, this.state.body)}}/>
    <button type="button" onClick={() => {this.props.cancelEdit()}}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
