import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
  // console.log(this.props.poems)

    return (

      <div className="poems-container">
        <h1>All Poems</h1>
        {
          this.props.poems ? this.props.poems.map(poem => <Poem poem={poem} addToFav={this.props.addToFav} deletePoem={this.props.deletePoem}/>) : null
        }
      </div>
    );
  }
}

export default PoemsContainer;
