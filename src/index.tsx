import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './Reducer';
import App from './components/App';

const store = createStore(reducer);

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
