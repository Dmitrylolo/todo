/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { TodoForm } from './src/components/TodoForm';
import { CREATE_TODO } from './src/reducers/reducers';

class _App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    };
  }

  handleChange(text) {
    this.setState({ newTodo: text });
  }

  handlePress() {
    this.props.createTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TodoForm 
            handlePress={this.handlePress.bind(this)}
            handleChange={this.handleChange.bind(this)}
            value={this.state.newTodo}
          />
          <View style={styles.todos}>
          {this.props.todos.map((todo, i) => (
              <Text style={styles.todo} key={i}>{todo}</Text>
          ))}
          </View>
        </View>
      </View>
    );
  }
}

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({ type: CREATE_TODO, payload: todo });
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
});

export const App = connect(mapStateToProps, mapActionsToProps)(_App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  todos: {
    marginTop: 60,
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10,
    fontSize: 24
  }
});
