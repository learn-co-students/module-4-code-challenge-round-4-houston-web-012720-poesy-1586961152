import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     poems: []
  //   }
  // }
    state = {
        poems: [],
        showMe: false
    }
  componentDidMount() {
    fetch("http://localhost:6001/poems")
    .then(res => res.json())
    .then(data => this.setState({
      poems: data
    }))
  }

  operation = () => {
    this.setState({
      showMe: !this.state.showMe
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        title: e.target[0].value,
        author: e.target[1].value,
        content: e.target[2].value
      })
    })
    .then(res => res.json())
    .then(newPoem => {
      this.setState({
        poems: [...this.state.poems, newPoem]
      })
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.operation()}>Show/hide new poem form</button>
          {this.state.showMe && <NewPoemForm submitForm={this.submitForm}/>}
        </div>
        <PoemsContainer poem={this.state.poems}/>
      </div>
    );
  }
}

export default App;
