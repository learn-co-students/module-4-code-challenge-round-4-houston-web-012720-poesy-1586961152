import React from "react";
import Poem from "./Poem";

class FavoritePoemsContainer extends React.Component {
    render() {
    // console.log(this.props.poems)
  
      return (
        <div className="poems-container">
            <h1>Favorites</h1>
          {
            this.props.favorites ? this.props.favorites.map(poem => <Poem poem={poem} />) : null
          }
        </div>
      );
    }
  }
  
  export default FavoritePoemsContainer;