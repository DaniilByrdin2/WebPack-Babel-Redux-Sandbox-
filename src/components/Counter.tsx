import React = require("react");
import { connect } from "react-redux";

import * as actions from '../Actions'

import { bindActionCreators } from "redux";

  

type propsType = {
    dec: () => void,
    inc: () => void,
    rnd: () => void,
    counter: number
}

const Counter = (props: propsType) => {

    return (
        <div>
            <h2 id="counter">{props.counter}</h2>
            <button onClick={props.dec} className="btn btn-primary btn-lg">DEC</button>
            <button onClick={props.inc} className="btn btn-primary btn-lg">INC</button>
            <button onClick={props.rnd} className="btn btn-primary btn-lg">RND</button>
        </div>
    )

}

const MapStateToProps = (state: number) => {
    return {
        counter: state
    }
}

const MapDispatchToProps = ( dispatch: any ) => {
    const { inc, dec, rnd } =  bindActionCreators( actions, dispatch )

    return {
        inc,
        dec,
        rnd,
    }
}

export default connect( MapStateToProps, MapDispatchToProps )( Counter )