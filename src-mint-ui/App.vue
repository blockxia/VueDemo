<template>
  <mt-button type="primary" @click.native="handleClick">测试mint-UI</mt-button>
</template>

<script>
 import {Toast}from 'mint-ui'
  export default{
    methods:{
      handleClick(){
        Toast({
          message:'已点击',
          position:'bottom',
          duration:5000
        })
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
