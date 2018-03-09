import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native';


import * as Animatable from 'react-native-animatable';

import Images from '../images';

export default class Animation extends React.Component {


    static navigationOptions = {
        tabBarLabel: 'Animation',
        tabBarIcon: ({ focused }) => (
            <Image source={focused ? Images.activeLocationIcon : Images.inactiveLocationIcon} />
        )
    }


    state = {
        w: 100,
        h: 100,
    };


    render() {
        return (
            <View style={styles.container}>
                <Animatable.View
                    ref='view'
                    style={[styles.box, { width: this.state.w, height: this.state.h }]}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            w: this.state.w + 15,
                            h: this.state.h + 15
                        });
                        this.refs.view.pulse(800);
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View >
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
