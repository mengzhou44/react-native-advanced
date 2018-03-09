import React, { Component } from 'react';


import {
    View,
    Switch,
    Image,
    Text,
    ActionSheetIOS,
    Alert,
    Slider
} from 'react-native';

import Collapsible from 'react-native-collapsible';
import DropdownAlert from 'react-native-dropdownalert';
import * as Progress from 'react-native-progress';

import Images from '../images';
import { Button, FadeInView } from './common';

const BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Destruct',
    'Cancel',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;


class Demo extends Component {

    static navigationOptions = {
        tabBarLabel: 'Demo',
        tabBarIcon: ({ focused }) => (
            <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
        )
    }

    constructor() {
        super();
        this.state = {
            wifi: false,
            clicked: 'Option 0',
            count: 0,
            collapsed: true
        };
    }

    showActionSheet() {
        ActionSheetIOS.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
        },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    showAlert() {
        Alert.alert(
            'Alert Title',
            'We will have a birthday party on this Sunday!',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    }

    render() {
        const { block1, block2 } = styles;
        return (
            <FadeInView style={{ flex: 1 }}>
                <View style={block1}>
                    <Text> Wifi </Text>
                    <Switch
                        value={this.state.wifi}
                        onValueChange={() => {
                            const wifi = !this.state.wifi;
                            this.setState({
                                wifi
                            });
                        }}
                    />

                    <Button onPress={this.showActionSheet.bind(this)}>
                        Click to show the ActionSheet
                  </Button>
                </View>
                <View style={block2}>

                    <Button onPress={this.showAlert.bind(this)}>
                        Click to show Reminder
                     </Button>

                    <Slider
                        maximumValue={100}
                        minimumvaue={0}
                        step={5}
                        onValueChange={value => this.setState({ count: value })}
                    />

                    <Button
                        onPress={() => {
                            this.setState({ collapsed: !this.state.collapsed });
                            this.refs.dropdown.alertWithType('error', 'Error', 'error occurred!');
                        }
                        }
                    >
                        Click Me!
                     </Button>

                    <Collapsible collapsed={this.state.collapsed} align='bottom'>
                        <View>
                            <Text>
                                Hello World!
                             </Text>
                        </View>
                    </Collapsible>


                </View>

                <Progress.Bar progress={0.3} width={200} />

                <DropdownAlert ref='dropdown' />
            </FadeInView>
        );
    }
}


const styles = {
    block1: {
        backgroundColor: 'powderblue',
        flex: 1
    },

    block2: {
        backgroundColor: 'steelblue',
        flex: 1,

    },

};

export default Demo;
