<template>
  <form class="mb-4" @submit.prevent="$emit('add', todo)">
    <h1 class="text-grey-darkest">Todo List</h1>
    <div class="flex mt-4">
      <input
        :value="todo.content"
        @input="$emit('change', $event.target.value)"
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          mr-4
          text-grey-darker
        "
        placeholder="Add Todo"
      />

      <button
        v-if="!todo.urgent"
        type="button"
        class="
          flex-shrink-0
          p-2
          ml-2
          mr-2
          border-2
          rounded
          hover:text-white
          text-white
          border-purple-600
          bg-purple-600
          hover:bg-purple-900 hover:border-purple-900
        "
        @click="$emit('urgent', true)"
      >
        Urgent
      </button>
      <button
        v-else
        type="button"
        class="
          flex-shrink-0
          p-2
          ml-2
          mr-2
          border-2
          rounded
          hover:text-white
          text-white
          border-purple-600
          bg-purple-600
          hover:bg-purple-900 hover:border-purple-900
        "
        @click="$emit('urgent', false)"
      >
        Not urgent
      </button>

      <button
        type="submit"
        class="
          flex-no-shrink
          p-2
          border-2
          rounded
          hover:text-white
          text-white
          border-purple-600
          bg-purple-600
          hover:bg-purple-900 hover:border-purple-900
        "
      >
        Add
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "TodoItemAdd",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
