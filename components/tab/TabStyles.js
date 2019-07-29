import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        borderTopWidth: 1,
        marginTop: '20%',
        borderTopColor: '#dddddd',
        borderBottomColor: '#dddddd'

    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
})


export {styles}