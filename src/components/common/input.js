import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { colors } from '../../constants';

const Input = ({
    label,
    value,
    placeholder,
    secureTextEntry,
    multiline,
    numberOfLines,
    disabled,
    onChangeText
       }) => {
    const { inputStyle, inputContainer, labelStyle, readOnlyStyle, containerStyle } = styles;

    if (disabled === true) {
        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <Text
                    style={readOnlyStyle}
                >
                    {value}
                </Text>
            </View>
        );
    }


    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <View style={inputContainer}>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    multiline={multiline}
                    numberOfLines={numberOfLines | 2}
                    autoCorrect={false}
                    selectTextOnFocus
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
};

const styles = {
    inputStyle: {
        color: colors.black,
        backgroundColor: colors.white,
        padding: 5,
        fontSize: 18,
        lineHeight: 23,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.gray
    },

    readOnlyStyle: {
        color: colors.white,
        padding: 5,
        fontSize: 18,
        lineHeight: 23,
        backgroundColor: colors.deepGray
    },

    labelStyle: {
        fontSize: 18,
        marginBottom: 3
    },
    containerStyle: {
        padding: 10,
        backgroundColor: colors.whitesmoke,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.whitesmoke
    }
};

export { Input };

