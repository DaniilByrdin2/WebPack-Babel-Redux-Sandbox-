import React from "react";
import { connect } from "react-redux";

import * as actions from '../Actions'

import { bindActionCreators } from "redux";

const Counter = ( { counter, inc, dec, rnd } ) => {
    return (
        <div>
            <h2 id="counter">{counter}</h2>
            <button onClick={ dec } className="btn btn-primary btn-lg">DEC</button>
            <button onClick={ inc } className="btn btn-primary btn-lg">INC</button>
            <button onClick={ rnd } className="btn btn-primary btn-lg">RND</button>
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        counter: state
    }
}

console.log( actions );


const MapDispatchToProps = ( dispatch ) => {
    const { inc, dec, rnd } =  bindActionCreators( actions, dispatch )

    return {
        inc,
        dec,
        rnd,
    }
}

export default connect( MapStateToProps, MapDispatchToProps )( Counter )