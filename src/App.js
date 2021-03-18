import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Main from './components/content/Main'

import './App.scss';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <div className="app">
              <Main/>
            </div>
        </Provider>
    );
};

export default App;
