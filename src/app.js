import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation';

import reducers from './reducers';

import Home from './components/home';

import ScreenModal from './components/screen-modal';

import Demo from './components/demo';

import Animation from './components/animation';

import { globalStyles } from './constants';

const TabNav = TabNavigator({
    Home: { screen: Home },
    Modal: { screen: ScreenModal },
    Demo: { screen: Demo },
    Animation: { screen: Animation },
}, {
        key: 'Home',
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
