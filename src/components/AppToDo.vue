<template>
  <div id="todo">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:create-todo="AddTodo"></create-todo>
  </div>
</template>

<script>
import TodoList from './TodoList'
import CreateTodo from './CreateTodo'
import sweetalert from 'sweetalert';

export default {
  name: 'AppToDo',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  methods: {
     AddTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
};
</script>