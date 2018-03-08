import React, { Component } from 'react';

import { View, Text } from 'react-native';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

import { BurgerMenuIcon } from './burger-menu-icon';

import { colors } from '../../constants';

class Navigation extends Component {
    render() {
        const { container, title, menuOptions, menuText } = styles;
        return (
            <MenuContext style={{ flex: 1 }} >
                <View style={container}>
                    <View style={{ flex: 1 }}><Text style={title} >{this.props.title}</Text></View>
                    <Menu
                        onSelect={(value) => this.props.onMenuSelect(value)}

                    >
                        <MenuTrigger>
                            <BurgerMenuIcon />
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={menuOptions} >
                            <MenuOption value={'Demo'}>
                                <Text style={menuText}>Demo</Text>
                            </MenuOption>

                        </MenuOptions>
                    </Menu>
                </View>
                {this.props.children}
            </MenuContext>
        );
    }
}

const styles = {
    container: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: colors.orange,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.deepGray,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '600'
    },

    menuOptions: {
        backgroundColor: colors.orange,
        borderRadius: 5,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.2
    },

    menuText: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 18,
        marginTop: 8,
        marginBottom: 8,
        textDecorationLine: 'underline'
    }
};

export { Navigation };
