<template>
  <div id="app">
    <notifications group="todos" position="bottom right" />
    <div
      class="
        h-100
        w-full
        flex
        items-center
        justify-center
        bg-teal-lightest
        font-sans
      "
    >
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
        <TodoItemAdd
          :todo="newTodo"
          @change="newTodo.content = $event"
          @add="addNewTodoItem($event)"
          @urgent="newTodo.urgent = $event"
        />
        <div>
          <transition-group tag="div" name="card">
            <TodoItem
              v-for="(todo, index) of todoItems"
              :key="index"
              :todo="todo"
              @remove="remove(todo)"
              @edit="edit($event)"
            ></TodoItem>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import TodoItemAdd from "@/components/TodoItemAdd";
import { mapState, mapMutations } from "vuex";

const newItem = {
  content: "",
  done: false,
  urgent: false,
};

export default {
  name: "TodoApp",
  data() {
    return {
      newTodo: { ...newItem },
    };
  },
  components: {
    TodoItem,
    TodoItemAdd,
  },
  computed: {
    ...mapState({
      todoItems: (state) => state.todos,
    }),
  },
  methods: {
    ...mapMutations({
      add: "todoAddItem",
      remove: "todoRemoveItem",
      edit: "todoEditItem",
    }),
    resetNewTodo() {
      this.newTodo = { ...newItem };
    },
    addNewTodoItem(item) {
      this.add({ ...item, id: Math.random().toString(36).substr(2, 9) });
      this.resetNewTodo();
      this.$notify({
        group: "todos",
        title: "Item was added successfully",
        type: "success",
        position: "bottom right",
      });
    },
  },
};
</script>

<style>
.card {
  transition: all 0.5s;
}
.card-enter, .card-leave-to
/* .card-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.card-enter-to {
  opacity: 1;
  transform: scale(1);
}

.card-leave-active {
  /*position: absolute;*/
}

.card-move {
  opacity: 1;
  transition: all 0.5s;
}
</style>
