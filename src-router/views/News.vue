<template>

      <ul>
        <li v-for="(news,index) in newsArr" :key="index">{{news}}</li>
      </ul>


</template>

<script>
    export default {
      data(){
       return{
         newsArr:['news001','new002','new003']
       }
      },


    }
</script>

<style>

</style>
