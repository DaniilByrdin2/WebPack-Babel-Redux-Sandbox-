
import  { createStore }  from "redux";
import reducer from "./Reducer";

import React = require("react");
// import React from "react";
// import ReactDom from 'react-dom';
import ReactDOM = require("react-dom");

import App from './components/App'

import { Provider } from "react-redux";



const store = createStore( reducer )

ReactDOM.render( 
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root') ) 