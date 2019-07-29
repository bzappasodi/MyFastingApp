import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

const Component = React.Component;

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


class FastingApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: '',
            name: ''
        };
    }


    getInitialState = () => {
        return {
            age: '',
            name: '',
        };

    };

    _handleTextChange = (event) => {

        this.setState(
            {name: event.nativeEvent.text}
        );
    };


    render() {
        // deconstruct
        const {name, age} = this.state
        return (
            <View>

                <Text style={styles.welcome}>Welcome to B Zapp's</Text>
                <Text style={styles.welcome}> React Native Sandbox!</Text>

                <Text style={styles.welcome}>You input your name as: {name}</Text>
                <Text style={styles.welcome}>You input your age as: {age}</Text>

                <Text style={styles.instructions}>To get started, edit App.js with </Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to see your age!"
                    onChangeText={(age) => this.setState({age})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Type here to enter your name!"
                    onSubmitEditing={this._handleTextChange}
                />

            </View>
        );
    }
}

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
        color: '#333333',
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
        color: '#333333',
        marginBottom: 10,
    },
});


export default FastingApp;
