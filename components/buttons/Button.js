import React from 'react'
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './ButtonStyles'

const Button = ({submitTodo, buttonText}) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            onPress={submitTodo}>
            <Text style={styles.submit}>
                {buttonText}
            </Text>
        </TouchableHighlight>
    </View>
)

export default Button