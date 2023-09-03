<template>
<h1>user 정보 입력</h1>
  <input v-model="userId" type="text" placeholder="아이디"><br>
  <input v-model="password" type="password" placeholder="비밀번호"><br>
  <input v-model="name" type="text" placeholder="이름"><br>
  <input v-model="birth" type="text" placeholder="생년월일 ex)0000-00-00"><br>
  <input v-model="address" type="text" placeholder="주소"><br>

  <select v-model="majorId">
    <option value="1">컴퓨터공학과</option>
    <option value="2">국문학과</option>
    <option value="3">영문학과</option>
    <option value="4">기계공학과</option>
    <option value="5">전기공학과</option>
    <option value="6">제주감귤선별과</option>
  </select><br>

  <select v-model="role">
    <option value="재학">재학</option>
    <option value="휴학">휴학</option>
    <option value="졸업">졸업</option>
    <option value="재직">재직</option>
  </select><br>

  <input v-model="status" type="radio" value="학생" placeholder="학생">학생
  <input v-model="status" type="radio" value="교수" placeholder="교수">교수<br>
  <button type="button" @click="register">확인</button>
  <button type="button" @click="routeInfoPage">검색페이지 이동</button>
</template>

<style>

</style>

<script>

export default {
    data(){
      return{
        pageNum: 1,
        userId : "",
        password : "",
        name : "",
        birth : "",
        address : "",
        majorId : "",
        role : "",
        status : "",
        resultData: null,
        resultCode: "",
      }
    },
    created() {
    },
    inject: ['$http'],
    methods:{
      routeInfoPage(){
        this.$router.push({ path: '/info'});
      },

      async register(){
        let data = {};
        data.pageNum = this.pageNum;
        data.userId = this.userId;
        data.password = this.password;
        data.name = this.name;
        data.birth = this.birth;
        data.address = this.address;
        data.majorId = this.majorId;
        data.role = this.role;
        data.status = this.status;
        console.log(data);
        const registerData = await this.$http.post('/register',data);
        this.resultCode = registerData.data.code;
        console.log(this.resultCode);


      },

    }

  }
</script>
