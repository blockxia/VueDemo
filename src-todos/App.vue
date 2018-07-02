<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo"/>
      <List :todos="todos" />
      <TodoFooter>
        <input type="checkbox" v-model="isCheck" slot="check"/>
        <span slot="count">已完成{{completedCount}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completedCount" @click="deleteCompleted" slot="btn">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import Header from './components/header.vue'
  import List from './components/list.vue'
  import Footer from './components/footer.vue'
  import storgeUtil from './util/storgeUtil'
  export default{
    data(){
      return{
        todos:storgeUtil.readTodos()
      }
    },
    computed: {
      completedCount () { // 完成的数量
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.completed?1:0), 0)
      },

      isCheck: {
        get () {
          return this.todos.length===this.completedCount && this.completedCount>0
        },

        set (value) {
          // 进行全选或全不选
          this.selectAll(value)
        }
      }
    },
    mounted () {
      PubSub.subscribe('deleteTodo',(msg,index)=>{
        this.deleteTodo(index)
      })
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
    },


    watch:{
      todos:{
        deep:true,

        handler:storgeUtil.saveTodos

      }
    },
     components:{
       TodoHeader:Header,
       List,
       TodoFooter:Footer
     },

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
