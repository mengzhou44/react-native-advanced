import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import Router from './router';

import Home from './components/home';


class App extends Component {

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Router style={{ flex: 1 }}>
                    <Home />
                </Router>
            </Provider>
        );
    }
}

export default App;
