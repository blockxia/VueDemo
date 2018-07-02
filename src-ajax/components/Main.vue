<template>
  <div>

    <h2 v-if="firstView">请输入关键字进行搜索</h2>
    <h2 v-if="loading">请求中。。。</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-if="users.length">
      <div class="card" v-for="(user,index) in users" :key="index">

        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import  PubSub from 'pubsub-js'
 import axios from 'axios'
    export default {
      data(){
        return{
          firstView:true,
          loading:false,
          users:[],
          errorMsg:''
        }
      },
      mounted(){
       PubSub.subscribe('search',(msg,searchName)=>{
          this.firstView=false;
          this.loading=true
         this.users=[]
         this.errorMsg=''
           /*vue-resource发ajax请求*/
         /*this.$http.get(`https://api.github.com/search/users?q=${searchName}`)
           .then(response=>{
             const result=response.data
             const users=result.items.map((item)=>({
               url:item.html_url,
               avatar_url:item.avatar_url,
               name:item.login
             }))
             this.loading=false
             this.users=users
           })
           .catch(error=>{
             this.loading=false
             this.errorMsg='请求失败'
           })*/
         axios.get(`https://api.github.com/search/users?q=${searchName}`)
           .then(response=>{
             const result=response.data
             const users=result.items.map(item=>({
               url:item.html_url,
               avatar_url:item.avatar_url,
               name:item.login
             }))
             this.loading=false
             this.users=users
           })
           .catch(error=>{
             this.loading=false
             this.errorMsg='请求失败了'
           })

       })
      }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
