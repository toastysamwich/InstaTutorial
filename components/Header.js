import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.headerLogo} source={require('./../assets/images/logo.png')} resizeMode={'contain'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1
    },
    headerLogo: {
        height: 60,
        width: 100,

    }
});