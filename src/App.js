import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      poems: [],
      toggleForm: false
    }
  }
  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then(data =>{ 
      console.log(data)
      this.setState({
      poems: data
    })})
  }
  
  toggleForm = () =>{
    console.log(" in toggle form")
    this.setState({
      toggleForm: true
    })
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={()=>this.toggleForm()}>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
