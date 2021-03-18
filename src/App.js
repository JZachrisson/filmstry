import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';

import './App.scss';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <div className="app">
                <h1>Hej!!</h1>
            </div>
        </Provider>
    );
};

export default App;
