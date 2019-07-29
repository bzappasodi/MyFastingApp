import React from 'react'
import {TextInput, View} from 'react-native'
import {styles} from './InputStyles'


const Input = ({inputValue, inputChange, placeholderText}) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={inputChange}
            placeholder={placeholderText}
            placeholderTextColor='#CACACA'
            selectionColor='#666666'/>
    </View>)


export default Input