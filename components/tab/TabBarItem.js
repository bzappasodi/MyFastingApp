import React from 'react'
import {Text, TouchableHighlight} from 'react-native'
import {styles} from './TabStyles'

const TabBarItem = ({border, title, selected, setType, type}) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress={setType}
        style={[
            styles.item, selected ? styles.selected : null,
            border ? styles.border : null,
            type === title ? styles.selected : null]}>
        <Text style={[styles.itemText, type === title ? styles.bold : null]}>
            {title}
        </Text>
    </TouchableHighlight>
)

export default TabBarItem