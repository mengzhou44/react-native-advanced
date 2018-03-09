import React, { Component } from 'react';

import { View, Button, Text, TouchableHighlight, Image } from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Icon from 'react-native-vector-icons/FontAwesome';

import Swipeable from 'react-native-swipeable';

import Images from '../images';

import { colors } from '../constants';

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
    <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

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

                <Text style={{ paddingTop: 20 }} > Welcome to Home Page </Text>

                <Icon size={15} name={'arrow-up'} color={colors.orange} />

                <Button
                    title="Go to Demo"
                    onPress={() => this.props.navigation.navigate('Demo')}
                />

                <ScrollableTabView
                    style={{ marginTop: 20, }}
                    initialPage={1}
                    renderTabBar={() => <DefaultTabBar />}
                >
                    <Text tabLabel='Tab #1'>My</Text>
                    <Text tabLabel='Tab #2'>favorite</Text>
                    <Text tabLabel='Tab #3'>project</Text>
                </ScrollableTabView>


                <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
                    <Text>My swipeable content</Text>
                </Swipeable>

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
