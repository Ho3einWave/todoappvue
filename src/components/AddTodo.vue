<template>
  <div class="addnew">
    <input type="text" v-model="todoTitle" />
    <button @click="addTodo"><i class="bi bi-plus-circle"></i> Add</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("add-todo", this.todoTitle);
      this.todoTitle = "";
    },
  },
};
</script>

<style>
.addnew {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  margin: 1rem;
  display: grid;
  grid-template-columns: 6fr 1fr;
  background-color: #efefef;
  border-radius: 2rem;
  padding: 0 0.5rem;
}
.addnew input {
  border: none;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0);
}
.addnew input:focus-visible {
  border: none;
  outline: none;
}
.addnew button {
  border: none;
  background: #0d6efd;
  color: #fff;
  border-radius: 2rem;
}
</style>
