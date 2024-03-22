import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';
import TodoList from './components/TodoList';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
      setText('');
    }
  };

  const handleCheckTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <TodoList todos={todos} onCheck={handleCheckTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default App;
