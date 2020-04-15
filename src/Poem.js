import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.p.title}</h3>
        <p>{this.props.p.content}</p>
        <p>
          <strong>- {this.props.p.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
