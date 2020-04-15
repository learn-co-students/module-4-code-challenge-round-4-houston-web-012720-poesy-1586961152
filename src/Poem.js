import React from "react";

class Poem extends React.Component {
  // this is probably not the way to do this... as you want your states to be in the top level.. 

  state = {
    read: false
  }

  readOrNot = () => {
    this.setState({
      read: this.state.read === false ? this.state.read = true : this.state.read = false
    })
  }

  // it works though... lol 

  render() {
    // console.log(this.props.poem)
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
    <p>{this.props.poem.content}</p>
        <p>
    <strong>- {this.props.poem.author}</strong>
        </p>
    <button onClick={() => this.readOrNot()}>Mark as {this.state.read === false ? "read" : "unread"}</button> 
    <button onClick={() => this.props.addToFav(this.props.poem)}>Add To Favorites</button>
    <button onClick={() => this.props.deletePoem(this.props.poem)}>Delete</button>
      </div>
    );
  }
}

export default Poem;



// onClick={() => this.props.readOrNotwithVariable()} doing it the other way changes state and doesnt work cause it will change all of them... tried doing it with a variable but wouldnt work... 
// I tried doing it from the app but it would change every button... 