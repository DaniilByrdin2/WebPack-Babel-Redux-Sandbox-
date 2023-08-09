import  { createStore }  from "redux";
import reducer from "./Reducer";

import React from "react";
import ReactDOM from 'react-dom'

import App from './components/app'

import { Provider } from "react-redux";



const store = createStore( reducer )

ReactDOM.render( 
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')  )

// store.subscribe( () => {
//   console.log( store.getState() );
// } )

// const {  dispatch, subscribe } = store

// const bindActionCreators = ( creator, dispatch ) => {
//   return (...args) => {
//     dispatch( creator( ...args ) )
//   }
// }
// const decDispatch = bindActionCreators( dec, dispatch )
// const incDispatch = bindActionCreators( inc, dispatch )
// const rndDispatch = bindActionCreators( rnd, dispatch )

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators( {
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd,
// }, dispatch )



// const update = () => {
//   <Provider store={store} >
//     <App />
//   </Provider>
//     , document.getElementById('root') 
// }



// ReactDOM.render( 
// <Provider store={ store } >
//   <App />
// </Provider>
// , document.getElementById('root') )

// update()
// subscribe(update)