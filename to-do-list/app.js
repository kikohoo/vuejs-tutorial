var currentID = 0
function increament() {
  return currentID++
}

new Vue({
  el: '#app-to-do-list',
  data() {
    return {
      todoList: [
        { id: increament(), text: '浇花', isDone: true },
        { id: increament(), text: '打扫卫生', isDone: false },
        { id: increament(), text: '寄快递', isDone: false },
      ],
      newTodo: '',
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo === '') {
        return
      } else {
        this.todoList.push({ id: increament(), text: this.newTodo, isDone: false })
        this.newTodo = ''
      }
    },
    removeTodo(todo) {
        this.todoList.splice(this.todoList.indexOf(todo), 1)
    },
    completed (todo) {
        this.todoList.indexOf(todo).isDone = true
    }
  },
})
