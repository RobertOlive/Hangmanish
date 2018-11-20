import React, {Component} from "react";

class Blank extends Component {
    render () {
        return (
            <span className={this.props.thisLetter}>
                {` _ `}
            </span>
        )
    }
}

export default Blank;