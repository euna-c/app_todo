/* eslint-disable */  
import Vue from 'vue'
// localStorage
const INITIAL_DATA = {
  todos: [
    {
      _id: '1',
      title: 'Walk the dog',
      description: 'Go to the forest near the zoo'
    },
    {
      _id: '2',
      title: 'Buy bread',
      description: 'Get a whole grain loaf'
    },
    {
      _id: '3',
      title: 'Learn Programming',
      description: 'Watch the vue videos'
    }
  ]
}

const store = {
	state: {
		todos: []
	},
	actions: {
		// localStorage
		initStore(state) {
			const todos = localStorage.getItem('my_todos')

			if (!todos) {
				Vue.set(state, 'todos', INITIAL_DATA.todos)
			} else {
				Vue.set(state, 'todos', JSON.parse(todos))
			}

			return state.todos
		},
		createTodo(state, todo) {
	
			todo._id = Math.random().toString(36).substr(2,7)
			state.todos.push(todo)

			return state.todos
	  	},

	  	updateTodo(state, todoToUpdate) {
	  		const index = state.todos.findIndex((todo) => {
	  	
	  		return todo._id === todoToUpdate._id // return index of todo object
	  		})
		
			Vue.set(state.todos, index, todoToUpdate) // access state.todos on 'index' and assign todoToUpdate
	  		return state.todos
	  	},
	  	deleteTodo(state, todoId) {
	  		const index = state.todos.findIndex((todo)=> {
	  	
	  		return todo._id === todoId // return index of todo object
	  		})

	  		state.todos.splice(index, 1)
	  		return state.todos
	  	}
	}
}

function persistData(value) {
	const stringifyValue = JSON.stringify(value)
	localStorage.setItem('my_todos', stringifyValue)
}

store.dispatch = function (action, payload) {
	
	if (!this.actions[action]) {
		throw new Error(`Action ${action} is not defined in the store`)
	}

	const result = this.actions[action](this.state, payload)

	if(!result) return

	persistData(result)

	return result
}

export default store 