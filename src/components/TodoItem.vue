<template>
	<div v-if="!editMode" class="todo-item">
        <div class="todo-item-content">
          <div class="todo-item-content-title">
            {{ title }}
          </div>
          <div class="todo-item-content-description">
            {{ description }}
          </div>
        </div>
        <div class="button-wrapper">
            <button 
              @click="editMode = true"
              class="app-button is-warning">Edit
            </button>
            <button 
              @click="deleteTodo"
              class="app-button is-danger">Delete
            </button>
          </div>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input 
          v-model="todoUpdate.title"
          class="form-input" type="text">
      </div>
      <div class="form-control from-control-last">
        <label class="label">Description</label>
        <textarea 
          v-model="todoUpdate.description"
          cols="35"
          rows="2"
          class="form-input">
            
        </textarea>
      </div>
        <button 
          @click.prevent="editTodo"
          class="app-button is-warning">Update
        </button>
        <button 
          @click.prevent="editMode = false"
          class="app-button is-danger">Cancel
        </button>
    </form>
  </div>
</template>

<script>
  import store from '@/store'
	/* eslint-disable */ 
	export default {
		//props: ['title', 'description']
		props: {
			title: {
				type: String,
				required: true
			},
			description: {
				type: String,
				required: false,
				default: 'Default description!!!!'
			},
      _id: {
        type: String,
        required: true
      }
		},
    data() {
      return {
        editMode: false,
        todoUpdate: {
          _id: this._id,
          title: this.title,
          description: this.description
        }
      }
    },
    methods: {
      editTodo() {
        store.dispatch('updateTodo', {...this.todoUpdate})
        this.editMode = false
      },
      deleteTodo() {
        store.dispatch('deleteTodo', this.todoUpdate._id)
      }
    }
	}
</script>

<style scoped lang="scss">
.app-button {
	font-size: 15px;
	&.is-warning {
		margin-right: 5px;
	}
}

.button-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 15px;
    }
.todo {
	&-item {
  background-color: gray;
  min-height: 70px;
  margin: 10px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 23px;

  &-content {
 
    &-title {
      font-weight: bold;
    }
    &-description {
      font-size: 19px;
    }
  }
  }
}
  
</style>