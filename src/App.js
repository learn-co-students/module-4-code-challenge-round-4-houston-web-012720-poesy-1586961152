import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allPoems: [],
      displayPoems: [],
      showPoemForm: false,
      myPoems: []
    }
  }

  componentDidMount() {
    this.getPoems()
  }

  getPoems = () => {
    fetch("http://localhost:6001/poems")
      .then(response => response.json())
      .then(poems => {
        this.setState({
          allPoems: poems,
          displayPoems: poems
        })
      })
  }

  togglePoemForm = () => {
    this.setState({
      showPoemForm: !this.state.showPoemForm
    })
  }

  addPoem = (event) => {
    event.preventDefault()
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: event.target[0].value,
        content: event.target[1].value,
        author: event.target[2].value
      })
    })
      // You can do it by a new fetch-GET to rerender all
      // .then(this.getPoems())
      // .then(event.target.reset())

      // Or you can do it by just spreading the state.displayPoems to add the response
      .then(response => response.json())
      .then(poem => this.setState({
        displayPoems: [...this.state.displayPoems, poem]
      }))
    // Pessimistic reset, after fetch, but outside of .then so the event doesn't get lost
    event.target.reset()

  }

  deletePoem = (poemToDelete) => {
    fetch(`http://localhost:6001/poems/${poemToDelete.id}`, {
      method: "DELETE"
    })

      // Same as with get-POST, you can either re-fetch with GET
      // .then(this.getPoems())

      // Or you can update this.state.displayPoems, since setting state re-renders
      .then(this.setState({
        displayPoems: this.state.displayPoems.filter(poem => poem.id !== poemToDelete.id)
      }))
  }

  likePoem = (poem) => {
    this.setState({
      myPoems: [...this.state.myPoems, poem]
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.togglePoemForm()}>Show/hide new poem form</button>
          {this.state.showPoemForm && <NewPoemForm addPoem={this.addPoem} />}
        </div>
        <PoemsContainer displayPoems={this.state.displayPoems} deletePoem={this.deletePoem} myPoems={this.state.myPoems} likePoem={this.likePoem} />
      </div>
    );
  }
}

export default App;
