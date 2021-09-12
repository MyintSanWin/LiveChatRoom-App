<template>
    <h2>Login</h2>
      <Signup/>
        <form  @submit.prevent="Login">

            <input type="email" placeholder=" email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <div class="error" v-if="error">{{error}}</div>
            <button>Login</button>
        </form>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
 
  setup(){

      let email=ref("");
      let password=ref("");
      let{error,signIn} = useLogin()
     let Login=async()=>{
      let res= await signIn(email.value,password.value)
      if(res){
          console.log(res.user)
      }
     }
      return {email,password,Login,error}
  }
  

}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
</style>