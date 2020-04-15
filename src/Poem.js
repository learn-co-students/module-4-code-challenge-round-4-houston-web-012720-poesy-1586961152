import React from "react";

class Poem extends React.Component {

  constructor() {
    super()
    this.state = {
      isRead: false,
      isLiked: false
    }
  }

  handleReadClick = () => {
    this.setState({
      isRead: !this.state.isRead
    })
  }

  handleLikeClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
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
        <button onClick={() => this.handleReadClick()}>{this.state.isRead ? "Mark as unread" : "Mark as read"}</button>
        <button onClick={() => this.props.deletePoem(this.props.poem)}>Delete Poem</button>
        <i onClick={() => this.handleLikeClick()}>{this.state.isLiked ? " ⭐ added to your favorites" : " ☆ not in your favorites"}</i>
      </div>
    );
  }
}

export default Poem;
