<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleted="deleteCompleted" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import List from './components/list.vue'
  import Footer from './components/footer.vue'

  export default{
    data(){
      return{
        todos:[
          {title: '吃饭', completed: false},
          {title: '睡觉', completed: true},
          {title: '打代码', completed: false}
        ]
      }
    },
     components:{
       TodoHeader:Header,
       List,
       TodoFooter:Footer
     },
    methods:{
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index,1)
      },
      deleteCompleted(){
        this.todos=this.todos.filter(todo=>!todo.completed)

      },//全选或全不选
      selectAll(check){
        this.todos.forEach(todo=>todo.completed=check)
      }
    }
  }
</script>

<style scoped>

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
