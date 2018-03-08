import React, { Component } from 'react';

import { View, Button, Text, Image } from 'react-native';

import Images from '../images';

class Home extends Component {

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
            <Image source={focused ? Images.activeInfoIcon : Images.inactiveInfoIcon} />
        )
    }


    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle} >
                <Text> Welcome to Home Page </Text>

                <Button
                    title="Go to Demo"
                    onPress={() => this.props.navigation.navigate('Demo')}
                />
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
