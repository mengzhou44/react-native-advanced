import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../constants';

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: colors.orange,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.orange,
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
