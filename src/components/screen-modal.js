import React, { Component } from 'react';

import { View, Button, Text, Image } from 'react-native';

import Modal from 'react-native-modal';

import Images from '../images';

class ScreenModal extends Component {

    static navigationOptions = {
        tabBarLabel: 'Modal',
        tabBarIcon: ({ focused }) => (
            <Image source={focused ? Images.activeInfoIcon : Images.inactiveInfoIcon} />
        )
    }

    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }


    render() {
        return (
            <View>

                <Button
                    title="Show Modal"
                    onPress={() => this.setState({ modalVisible: true })}
                />

                <Modal
                    isVisible={this.state.modalVisible}
                    onBackdropPress={() => this.setState({ modalVisible: false })}
                >
                    <View style={{ backgroundColor: 'white', height: 200, justifyContent: 'center', alignItems: 'center' }} >
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>

            </View>
        );
    }
}

export default ScreenModal; 
