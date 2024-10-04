<template>
  <div class="container">
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
    <div class="subcontainer">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span v-if="!todo.isEditing">{{ todo.text }}</span>
          <input
            v-if="todo.isEditing"
            v-model="todo.text"
            @blur="finishEdit(todo)"
            @keyup.enter="finishEdit(todo)"
          />
          <button class="edit" @click="editTodo(todo)">Edit</button>
          <button class="delete" @click="deleteTodo(index)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, isEditing: false })
        this.newTodo = ''
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    editTodo(todo) {
      todo.isEditing = true
    },
    finishEdit(todo) {
      todo.isEditing = false
    }
  },
  name: 'ToDoList'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 3px;
}
input[type='text'] {
  flex: 1;
}

.edit {
  margin-left: 10px;
  background-color: green;
  color: white;
  border-radius: 3px;
  border: 1px solid #333;
}

.delete {
  margin-left: 5px;
  background-color: red;
  color: white;
  border-radius: 3px;
  border: 1px solid #333;
}

.container {
  width: 400px;
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
}

.subcontainer {
  border: 1px solid white;
  border-radius: 5px;
  background-color: #333;
  color: white;
  padding: 2px;
}
</style>
