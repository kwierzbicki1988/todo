(function(t){function e(e){for(var r,d,i=e[0],s=e[1],l=e[2],c=0,p=[];c<i.length;c++)d=i[c],Object.prototype.hasOwnProperty.call(o,d)&&o[d]&&p.push(o[d][0]),o[d]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);a&&a(e);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(u.splice(e--,1),t=d(d.s=n[0]))}return t}var r={},o={app:0},u=[];function d(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=r,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)d.d(n,r,function(e){return t[e]}.bind(null,r));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/todo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var a=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("c740"),n("a434");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("notifications",{attrs:{group:"todos",position:"bottom right"}}),n("div",{staticClass:"\n      h-100\n      w-full\n      flex\n      items-center\n      justify-center\n      bg-teal-lightest\n      font-sans\n    "},[n("div",{staticClass:"bg-white rounded shadow p-6 m-4 w-full lg:w-3/4"},[n("TodoItemAdd",{attrs:{todo:t.newTodo},on:{change:function(e){t.newTodo.content=e},add:function(e){return t.addNewTodoItem(e)},urgent:function(e){t.newTodo.urgent=e}}}),n("div",[n("transition-group",{attrs:{tag:"div",name:"card"}},t._l(t.todoItems,(function(e,r){return n("TodoItem",{key:r,attrs:{todo:e},on:{remove:function(n){return t.remove(e)},edit:function(e){return t.edit(e)}}})})),1)],1)],1)])],1)},u=[],d=n("5530"),i=(n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item card"},[t.todo.done?n("div",{staticClass:"flex mb-4 items-center"},[n("p",{staticClass:"w-full line-through text-green"},[t._v(t._s(t.todo.content))]),n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-4\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",on:{click:function(e){return t.$emit("edit",Object.assign({},t.todo,{done:!1}))}}},[t._v(" Not Done ")]),t.todo.urgent?n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",on:{click:function(e){return t.$emit("edit",Object.assign({},t.todo,{urgent:!1}))}}},[t._v(" Not urgent ")]):n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",on:{click:function(e){return t.$emit("edit",Object.assign({},t.todo,{urgent:!0}))}}},[t._v(" Urgent ")]),n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        border-2\n        rounded\n        text-gray-700\n        border-gray-300\n        bg-gray-300\n        hover:text-gray-400 hover:border-gray-50 hover:bg-gray-50\n      ",on:{click:function(e){return t.$emit("remove")}}},[t._v(" Remove ")])]):n("div",{staticClass:"flex mb-4 items-center"},[n("p",{staticClass:"w-full text-grey-darkest"},[t._v(t._s(t.todo.content))]),n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-4\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",on:{click:function(e){return t.$emit("edit",Object.assign({},t.todo,{done:!0}))}}},[t._v(" Done ")]),t.todo.urgent?n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",on:{click:function(e){return t.$emit("edit",Object.assign({},t.todo,{urgent:!1}))}}},[t._v(" Not urgent ")]):n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",on:{click:function(e){return t.$emit("edit",Object.assign({},t.todo,{urgent:!0}))}}},[t._v(" Urgent ")]),n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        border-2\n        rounded\n        text-gray-700\n        border-gray-300\n        bg-gray-300\n        hover:text-gray-400 hover:border-gray-50 hover:bg-gray-50\n      ",on:{click:function(e){return t.$emit("remove")}}},[t._v(" Remove ")])])])}),s=[],l={name:"TodoItem",props:{todo:{type:Object,required:!0}}},a=l,c=n("2877"),p=Object(c["a"])(a,i,s,!1,null,null,null),b=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"mb-4",on:{submit:function(e){return e.preventDefault(),t.$emit("add",t.todo)}}},[n("h1",{staticClass:"text-grey-darkest"},[t._v("Todo List")]),n("div",{staticClass:"flex mt-4"},[n("input",{staticClass:"\n        shadow\n        appearance-none\n        border\n        rounded\n        w-full\n        py-2\n        px-3\n        mr-4\n        text-grey-darker\n      ",attrs:{placeholder:"Add Todo"},domProps:{value:t.todo.content},on:{input:function(e){return t.$emit("change",e.target.value)}}}),t.todo.urgent?n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",attrs:{type:"button"},on:{click:function(e){return t.$emit("urgent",!1)}}},[t._v(" Not urgent ")]):n("button",{staticClass:"\n        flex-shrink-0\n        p-2\n        ml-2\n        mr-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",attrs:{type:"button"},on:{click:function(e){return t.$emit("urgent",!0)}}},[t._v(" Urgent ")]),n("button",{staticClass:"\n        flex-no-shrink\n        p-2\n        border-2\n        rounded\n        hover:text-white\n        text-white\n        border-purple-600\n        bg-purple-600\n        hover:bg-purple-900 hover:border-purple-900\n      ",attrs:{type:"submit"}},[t._v(" Add ")])])])},h=[],m={name:"TodoItemAdd",props:{todo:{type:Object,required:!0}}},v=m,g=Object(c["a"])(v,f,h,!1,null,null,null),x=g.exports,w=n("2f62"),y={content:"",done:!1,urgent:!1},O={name:"TodoApp",data:function(){return{newTodo:Object(d["a"])({},y)}},components:{TodoItem:b,TodoItemAdd:x},computed:Object(d["a"])({},Object(w["c"])({todoItems:function(t){return t.todos}})),methods:Object(d["a"])(Object(d["a"])({},Object(w["b"])({add:"todoAddItem",remove:"todoRemoveItem",edit:"todoEditItem"})),{},{resetNewTodo:function(){this.newTodo=Object(d["a"])({},y)},addNewTodoItem:function(t){this.add(Object(d["a"])(Object(d["a"])({},t),{},{id:Math.random().toString(36).substr(2,9)})),this.resetNewTodo(),this.$notify({group:"todos",title:"Item was added successfully",type:"success",position:"bottom right"})}})},j=O,_=(n("034f"),Object(c["a"])(j,o,u,!1,null,null,null)),k=_.exports,C=n("ee98"),T=n.n(C);n("ba8c");r["default"].config.productionTip=!1,r["default"].use(w["a"]),r["default"].use(T.a);var I=new w["a"].Store({state:{todos:[]},mutations:{todoAddItem:function(t,e){t.todos.push(e)},todoRemoveItem:function(t,e){var n=t.todos.findIndex((function(t){return t.id===e.id}));t.todos.splice(n,1)},todoEditItem:function(t,e){var n=t.todos.findIndex((function(t){return t.id===e.id}));t.todos.splice(n,1,e)}}});new r["default"]({render:function(t){return t(k)},store:I}).$mount("#app")},"85ec":function(t,e,n){},ba8c:function(t,e,n){}});
//# sourceMappingURL=app.0861a16c.js.map