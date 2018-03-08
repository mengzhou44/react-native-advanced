import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/home';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='home' component={Home} title='Home' initial />
            </Scene>
        </Router>
    );
};

export default RouterComponent; 
