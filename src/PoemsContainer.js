import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  render() {
    return (
      <div className="poems-container">
        {
          this.props.poem.map(poems => <Poem p={poems}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
