<template>
  <div class="todo-item card">
    <div v-if="!todo.done" class="flex mb-4 items-center">
      <p class="w-full text-grey-darkest">{{ todo.content }}</p>
      <button
        class="
          flex-shrink-0
          p-2
          ml-4
          mr-2
          border-2
          rounded
          hover:text-white
          text-white
          border-purple-600
          bg-purple-600
          hover:bg-purple-900 hover:border-purple-900
        "
        @click="$emit('edit', { ...todo, done: true })"
      >
        Done
      </button>
      <button
        v-if="!todo.urgent"
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
        @click="$emit('edit', { ...todo, urgent: true })"
      >
        Urgent
      </button>
      <button
        v-else
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
        @click="$emit('edit', { ...todo, urgent: false })"
      >
        Not urgent
      </button>

      <button
        class="
          flex-shrink-0
          p-2
          ml-2
          border-2
          rounded
          text-gray-700
          border-gray-300
          bg-gray-300
          hover:text-gray-400 hover:border-gray-50 hover:bg-gray-50
        "
        @click="$emit('remove')"
      >
        Remove
      </button>
    </div>
    <div v-else class="flex mb-4 items-center">
      <p class="w-full line-through text-green">{{ todo.content }}</p>
      <button
        class="
          flex-shrink-0
          p-2
          ml-4
          mr-2
          border-2
          rounded
          hover:text-white
          text-white
          border-purple-600
          bg-purple-600
          hover:bg-purple-900 hover:border-purple-900
        "
        @click="$emit('edit', { ...todo, done: false })"
      >
        Not Done
      </button>

      <button
        v-if="!todo.urgent"
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
        @click="$emit('edit', { ...todo, urgent: true })"
      >
        Urgent
      </button>
      <button
        v-else
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
        @click="$emit('edit', { ...todo, urgent: false })"
      >
        Not urgent
      </button>

      <button
        class="
          flex-shrink-0
          p-2
          ml-2
          border-2
          rounded
          text-gray-700
          border-gray-300
          bg-gray-300
          hover:text-gray-400 hover:border-gray-50 hover:bg-gray-50
        "
        @click="$emit('remove')"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
