<template>
  <div>
    <h1>입력된 user 정보</h1>
    <button type="button" @click="fetchDataFromServer">정보 표시</button>
    <p>{{userData}}</p>
    <p>{{name}}</p>
  </div>
</template>

<style>


</style>

<script>
import axios from "axios";

export default {
  data(){
    return{
      userData: null,
      userId : "",
      password : "",
      name : "",
      birth : "",
      address : "",
      majorId : "",
      role : "",
      status : "",
    };
  },
  created(){

  },
  inject:['$http'],
  methods:{
    async fetchDataFromServer(){
      try{
        let data ={};

        const response = await this.$http.get('/register', data);
        this.userData = response.data;
        const userDataObj = JSON.parse(this.userData);

        this.userId = userDataObj.userId;
        this.name = userDataObj.name;
        console.log(name);
        console.log('Received Data:', response.data);
      }catch (error){
        console.error('Error fetching data:', error);
      }
    }
  }

}
</script>
