import React from 'react';
import {Text, View} from 'react-native';
import TodoButton from '../buttons/TodoButton';
import {styles} from './ToDoStyles'

const Todo = ({todo, toggleComplete, deleteTodo}) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton
                name='Done'
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoIndex)}/>
            <TodoButton
                name='Delete'
                onPress={() => deleteTodo(todo.todoIndex)}/>
        </View>
    </View>
)
export default Todo