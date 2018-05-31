<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/GoogleMap">GoogleMap</router-link>
    </nav>
    <router-view /> 
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import sweetalert from 'sweetalert';
import GoogleMap from './components/GoogleMap'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    //TodoList,
    //CreateTodo,
    //GoogleMap,
  },
  /*data() {
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
  },*/
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
