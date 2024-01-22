import  { createStore }  from "redux";
import { Provider } from "react-redux";

import React = require("react");
import ReactDOM = require("react-dom");

import reducer from "./Reducer";
import App from './components/App'



const store = createStore( reducer )

ReactDOM.render( 
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root') ) 