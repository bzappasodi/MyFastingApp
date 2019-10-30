import {StyleSheet} from 'react-native';

const myGray = '#333';
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        height: 25,
    },

    instructions: {
        textAlign: 'center',
        color: myGray,
        marginBottom: 5,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        height: 30,
        marginBottom: 10,
    },
    placeholder: {
        fontSize: 10,
        borderWidth: 1,
        height: 30,
        color: myGray,
        marginBottom: 10,
    },
});


export {styles}