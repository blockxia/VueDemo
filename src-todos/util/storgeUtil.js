/*
数据存储的工具模块
问题: 向外暴露一个函数(一个功能)还是一个对象(多个功能)?

 */
const TODOS_KEY='todos_key'
export default {
  saveTodos(todos){//保存数据
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEY)||'[]')
  }




}
