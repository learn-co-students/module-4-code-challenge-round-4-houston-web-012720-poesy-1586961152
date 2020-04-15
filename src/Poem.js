import React from "react";

class Poem extends React.Component {
  state ={
    read: false 
  }
  markRead=()=> {
    
   this.setState({
      read: !this.state.read

    })
  }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
    <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>

        <button onClick={()=> this.markRead()}>{this.state.read ? "Mark as read" : "Mark as unread"} </button> 
      
      </div>
    );
  }
}

export default Poem;
