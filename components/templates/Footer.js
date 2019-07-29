import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Component = React.Component;


const Footer = () => (
    <View>
        <Text style={styles.Footer}>Footer</Text>
    </View>
)
const styles = StyleSheet.create({

    Footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: -370,
        textAlign: 'center',
        backgroundColor: 'red',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',

    },

});

export default Footer;