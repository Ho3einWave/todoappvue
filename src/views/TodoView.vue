<template>
  <div class="appview">
    <div class="ui">
      <p class="app-name">Todo App</p>
      <div class="container">
        <AddTodo @add-todo="addTodo" />
        <TodoComponent
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @delete-todo="deleteTodo"
          @toggle-todo="toggleTodo"
        />
      </div>
      <p class="time-show">{{ time }}</p>
    </div>
  </div>
</template>

<script>
import TodoComponent from "@/components/TodoComponent.vue";
import AddTodo from "@/components/AddTodo.vue";
export default {
  name: "TodoView",
  components: {
    TodoComponent,
    AddTodo,
  },
  data() {
    return {
      todos: null,
      time: null,
    };
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    const vm = this;
    function time() {
      vm.time = new Date().toLocaleString("en-US").replace(", ", " - ");
    }
    setInterval(time, 1 * 1000);
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        id: Date.now(),
        title: title,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    toggleTodo(todo) {
      this.todos = this.todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      );
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
};
</script>

<style>
.appview {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.ui {
  border-radius: 2rem;
  box-shadow: 0px 0px 38px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 38px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 38px 0px rgba(0, 0, 0, 0.1);
}
.app-name {
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #0d6efd;
}
.container {
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.time-show {
  background-color: #0d6efd;
  width: fit-content;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  margin-bottom: 1rem;
}
</style>
