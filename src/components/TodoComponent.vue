<template>
  <div class="todo">
    <input
      type="checkbox"
      class="form-check-input checkbox"
      :checked="todo.completed"
      @click="toggleTodo"
    />
    <span :class="{ done: todo.completed }">{{ todo.title }}</span>

    <button class="delete" @click="deleteTodo">
      <i class="bi bi-trash"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoComponent",
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      this.$emit("delete-todo", this.todo);
    },
    toggleTodo() {
      this.$emit("toggle-todo", this.todo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #efefef;
  width: 30rem;
  padding: 0.5rem;
  border-radius: 2rem;
  margin: 0 0 1rem 0;
}
.checkbox {
  margin-top: 0;
  margin-left: 0.5rem;
}
.delete {
  border: none;
  background: #0d6efd;
  color: #fff;
  padding: 0.5rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.8rem;
  width: 2rem;
  height: 2rem;
}

.done {
  text-decoration: line-through;
}
</style>
