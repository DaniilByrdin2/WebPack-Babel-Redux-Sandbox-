// import Log from "./log.js";
// import Calc from "./calc.js";

// import img from './logo-react.png';

// const calc = new Calc()
// const log = new Log()


// log.log( calc.add(1, 2, 3) )

// const el = document.createElement('img')
// el.src = img
// el.width = 50
// el.height = 50
// document.body.appendChild( el )


// --------------------------------------------------------


// import React from "react";
// import  ReactDOM  from "react-dom";
// import './main.scss'


// const App = () => <h1>WebPack</h1>

// ReactDOM.render( <App/> , document.getElementById('root') )


// -----------------------------------------------------------


import  { createStore }  from "redux";
import reducer from "./Reducer";

import React from "react";
import ReactDOM from 'react-dom'

import App from './components/app.js'

import { Provider } from "react-redux";



const store = createStore( reducer )

ReactDOM.render( 
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')  )