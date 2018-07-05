<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem(index)">删除</a>
    </div>
    <p class="user"><span >{{m.name}}</span><span>说:</span></p>
    <p class="centence">{{m.content}}!</p>
  </li>
</template>

<script>
    export default {
      props:{
        m:Object,
        index:Number,
        deleteComment:Function
      },
      methods:{
        deleteItem(index){
          const {m}=this
          if(window.confirm(`确定删除${m.name}的评论吗？`)){
             this.deleteComment(index)
          }
        }
      }
    }
</script>

<style>

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
