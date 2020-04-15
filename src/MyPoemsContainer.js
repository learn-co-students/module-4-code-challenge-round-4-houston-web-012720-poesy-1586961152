// Don't mind this; was just trying to make the final stretch

import React from "react";
import Poem from "./Poem";

class MyPoemsContainer extends React.Component {
    render() {
        return (
            <div className="poems-container">
                {
                    this.props.myPoems.map((poem) => <Poem poem={poem} key={poem.id} />)
                }
            </div>
        );
    }
}

export default MyPoemsContainer;
