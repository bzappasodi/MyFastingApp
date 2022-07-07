/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, View} from 'react-native';
import Input from './components/form/Input';
import Header from './components/templates/Header';
import Button from './components/buttons/Button';
import TodoList from './components/todo/TodoList';
import TabBar from './components/tab/TabBar';

import {styles} from './AppStyles'

const Component = React.Component;

let todoIndex = 0;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
        }
        this.setType = this.setType.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    inputChange(inputValue) {
        console.log(' Input Value: ', inputValue)
        this.setState({inputValue})
    }

    setType(type) {
        this.setState({type})
    }

    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }
        todoIndex++
        const todos = [...this.state.todos, todo]
        this.setState({todos, inputValue: ''}, () => {
            console.log('State: ', this.state);
        })
    }

    toggleComplete(todoIndex) {
        let todos = this.state.todos
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete
            }
        })
        this.setState({todos})

    }

    deleteTodo(todoIndex) {
        let {todos} = this.state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        this.setState({todos})

    }

    render() {
        // deconstructing
        const {todos, inputValue, type} = this.state,
            title = "My Fasting App", placeholderText = "How did your fast go?", buttonText = "Submit";

        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Header title={title}/>
                    <Input inputValue={inputValue} placeholderText={placeholderText}
                           inputChange={(text) => this.inputChange(text)}/>
                    <TodoList
                        type={type}
                        toggleComplete={this.toggleComplete}
                        deleteTodo={this.deleteTodo}
                        todos={todos}/>
                    <Button buttonText={buttonText} submitTodo={this.submitTodo}/>
                    <TabBar type={type} setType={this.setType}/>
                </ScrollView>
            </View>
        );
    }
}


export default App;