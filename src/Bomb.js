import React from 'react';

class Bomb extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        console.log(this.props);
        return(
            <div>{this.state.secondsLeft === 0 ? <h2>Boom!</h2> : <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>}</div>
        )
    }
}

export default Bomb