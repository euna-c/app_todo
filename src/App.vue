<!-- HTML part -->

<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <!-- <TodoList></TodoList> -->
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <todo-create @formSubmitted="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- JS part -->
<script>
/* eslint-disable */  
import playground from './playground.js'
import TodoList from '@/components/TodoList'
import TodoCreate from '@/components/TodoCreate'
import store from '@/store/index'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      todos: store.state.todos
    }
  },
  // this function is run automatically by vue framework
  created() {
    //playground()
    this.todos = store.dispatch('initStore')
  }, 
  methods: {
    createTodo(todo) {
    store.dispatch('createTodo', todo)
   }
  } 
}
</script>

<!-- CSS part -->
<style lang="scss">

$color-red: red;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-error {
    color: red;
  }

 .form-error {
    margin-bottom: 10px;
  }

.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  .form-input {
    padding: 10px;
    font-size: 17px;
  }

  .form-control {
    margin-bottom: 10px;

    &-last {
      margin-bottom: 0;
    }
  }
}

.is-primary {
    background-color: #43ad43 !important;
  }
.is-warning {
    background-color: #ffa753 !important;
  }
.is-danger {
    background-color: #ff5a5a !important;
  }

.app-button {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #795899;
    color: white;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
}

.todo {
    &-wrapper {
      /* flexible styling*/
    display: flex;
    /*it defines alignment along the main aixs */
    justify-content: center;
    /*flex-direction: column;*/
    width: 100%;
    /*height: 2000px;*/
    }

    &-create-btn-container {
      margin: 10px;
    }

    &-container {
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 200px;
    background-color: #ededed;
    border-radius: 5px;
    }
}
</style>
