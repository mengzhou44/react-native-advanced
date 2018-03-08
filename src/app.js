import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} from 'react-navigation';

import reducers from './reducers';

import Home from './components/home';

import Demo from './components/demo';

import { globalStyles } from './constants';

const TabNav = TabNavigator({
    Home: { screen: Home },
    Demo: { screen: Demo },
}, {
        key: 'Schedule',
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        headerMode: 'none',
        initialRouteName: 'Home',
        tabBarOptions: {
            style: globalStyles.tabBar,
            labelStyle: globalStyles.tabBarLabel,
            activeTintColor: 'white',
            inactiveTintColor: 'white'
        }
    }
);

class App extends Component {

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <TabNav />
            </Provider>
        );
    }
}

export default App;
