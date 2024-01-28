import  { createStore }  from "redux";
import { Provider } from "react-redux";

import React, { StrictMode } from "react";

import reducer from "./Reducer";
import App from './components/App'

import { createRoot } from 'react-dom/client';

const store = createStore( reducer )

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>
);
