import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritePoemsContainer from "./FavoritePoemsContainer";

class App extends React.Component {


  state = {
    poems: [],
    displayPoems: [],
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(poems => {
        this.setState({
          poems: poems,
          displayPoems: poems,
          showForm: false,
          // read: false,
          favorites: []
        })
      })
  }

  // readOrNot = () => {
  //   this.setState({
  //     read: this.state.read === false ? this.state.read = true : this.state.read = false
  //   })
  // }

  // readOrNotwithVariable = () => {
  //   const read = false

  //   read === false ? read = true : read = false
    

  // }


  showHideForm = () =>{
    // console.log('test')
    this.setState({
      showForm: this.state.showForm === false ? this.state.showForm = true : this.state.showForm = false
    })
  }

  // doesnt persist to back end.... I would need to use a post fetch to get it to save permanently to favs. More time I could get it to work 

  addToFav = (poem) =>{
    this.setState({
      favorites: [...this.state.favorites, poem]
    })
  }

  // running out of time QQ // I think I need to splice or something to get it to work.. in .then. removing it from the displayPoems state ???
  // nevermind it might be working... 
  // it DOES!! Just have to refresh!!

  deletePoem = (poem) =>{
    fetch(`http://localhost:6001/poems/${poem.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
  }

  newPoem = (e) =>{
    // console.log('new poem')
    
    let newPoem = {
      title: e.target[0].value,
      author: e.target[1].value,
      content: e.target[2].value,
    }

    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoem)
    })
      .then(resp => resp.json())
      .then(poem => this.setState({
        displayPoems: [...this.state.displayPoems, poem]
      }))
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.showHideForm()}>Show/hide new poem form</button>
          {this.state.showForm === true ? <NewPoemForm newPoem={this.newPoem}/> : null}
        </div>
        <PoemsContainer poems={this.state.displayPoems} addToFav={this.addToFav} deletePoem={this.deletePoem}/>
        <FavoritePoemsContainer favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
