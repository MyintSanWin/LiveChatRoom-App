<template>
    <h2>Login</h2>
      <Signup/>
        <form  @submit.prevent="Login">

            <input type="email" placeholder=" email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button>Login</button>
        </form>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Signup.vue'
export default {
  components: { Login },
  setup(){
     
      let email=ref("");
      let password=ref("");
     let Login=()=>{
         console.log(displayName.value,email.value,password.value)
     }
      return {email,password,Login}
  }
  

}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
</style>