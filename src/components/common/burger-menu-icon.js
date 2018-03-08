import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { colors } from '../../constants';

const BurgerMenuIcon = () => {
    const { containerStyle, viewStyle } = styles;
    return (
        <View style={containerStyle}>
            <View
                style={viewStyle}
            />

            <View
                style={viewStyle}
            />

            <View
                style={viewStyle}
            />

        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 15
    },

    viewStyle: {
        width: 30,
        height: 8,
        borderBottomColor: colors.white,
        borderBottomWidth: 2
    }
};


export { BurgerMenuIcon };
