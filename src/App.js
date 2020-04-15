import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      poems: [],
      poemList: [],
      showForm: false,
      
    }
  }
  componentDidMount () {
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poems => {
      this.setState({
        poems: poems,
        poemList: poems,
        
      })
    }) 
  }

  newPoem=(e)=> {
    e.preventDefault()
    
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
      title: e.target[0].value,
      content: e.target[1].value,
      author: e.target[2].value
      })
    })
    .then(res => res.json())
    .then(poems => {
      this.setState({
        poemList: [...this.state.poems, poems]
      })
    })



  }


  form (){
    this.setState({
      showForm: !this.state.showForm
    })
  }
  



  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={()=> this.form()}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm newPoem={this.newPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poemList}/>
      </div>
    );
  }
}

export default App;
