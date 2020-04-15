import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.displayPoems.map((poem) => <Poem poem={poem} key={poem.id} deletePoem={this.props.deletePoem} />)
        }
      </div>
    );
  }
}

export default PoemsContainer;
