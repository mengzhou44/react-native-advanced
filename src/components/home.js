import React, { Component } from 'react';

import { View } from 'react-native';

import { Navigation } from './common';


import ScreenDemo from './screen-demo';

class Home extends Component {

    state = { current: 'Demo' };

    renderScreen() {
        switch (this.state.current) {
            case 'Demo':
                return <ScreenDemo />;

            default:
                return <ScreenDemo />;
        }
    }
    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle} >
                <Navigation
                    title={this.state.current}
                    onMenuSelect={
                        (menu) => this.setState({ current: menu })}
                >
                    {this.renderScreen()}
                </Navigation>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },

    textStyle: {
        fontSize: 18,
        alignSelf: 'center'
    }
};

export default Home; 
