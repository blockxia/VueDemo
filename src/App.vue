<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
     <Add :addComment="addComment" />
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/add.vue'
  import List from './components/list.vue'
  import Item from './components/item.vue'

  export default{
    data(){
      return{
        comments:[
          {
            name:'lili',
            content:'Vue 简单'
          },
          {
            name:'huhu',
            content:'Vue 简单'
          },
          {
            name:'ff',
            content:'Vue so so'
          }
        ]
      }
    },
    methods:{
      addComment(comment){
         this.comments.unshift(comment)
      },
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },
    components:{
      Add,
      List
    }
  }
</script>

<style scoped>


</style>
