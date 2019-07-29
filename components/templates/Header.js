import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Header = ({title}) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
          {title}
        </Text>
    </View>
)
const styles = StyleSheet.create({
    header: {
        marginTop: 10
    },
    headerText: {
        textAlign: 'center',
        fontSize: 40,
        color: 'red',
        fontWeight: '200',
        marginBottom: 30,
    } })
export default Header