import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import Notifications from 'vue-notification'
import "./assets/tailwind.css";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Notifications);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    todoAddItem(state, item) {
      state.todos.push(item);
    },
    todoRemoveItem(state, item) {
      const index = state.todos.findIndex((todo) => todo.id === item.id);
      state.todos.splice(index, 1);
    },
    todoEditItem(state, item) {
      const index = state.todos.findIndex((todo) => todo.id === item.id);
      state.todos.splice(index, 1, item);
    },
  },
});

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
