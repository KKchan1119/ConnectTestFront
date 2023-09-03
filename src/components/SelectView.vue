<template>
  <div>
    <h1>입력된 user 정보</h1>
    <input v-model="userId" type="text" placeholder="조회할 이름 입력">
    <button type="button" @click="fetchDataFromServer">정보 표시</button>
    <p>{{userData}}</p>
    <p>{{name}}</p>
  </div>
</template>

<style>


</style>

<script>

export default {
  data(){
    return{
      pageNum: 2,
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
        data.pageNum= this.pageNum;
        data.userId=this.userId;
        console.log(data.pageNum);
        console.log(data.userId);
        const response = await this.$http.post('/register', data);
        this.userData = response.data;

        console.log(this.userData.code);
        this.name = this.userData.name;
        this.password = this.userData.password;
        this.name = this.userData.name;
        this.birth = this.userData.birth;
        this.address = this.userData.address;
        this.majorId = this.userData.majorId;
        this.role = this.userData.role;
        this.status = this.userData.status;
        console.log(name);
        console.log('Received Data:', response.data);
      }catch (error){
        console.error('Error fetching data:', error);
      }
    }
  }

}
</script>
