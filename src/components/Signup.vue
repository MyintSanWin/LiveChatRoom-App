<template>
    <h2>Sign Up</h2>
        <form  @submit.prevent="signUp">
            <input type="text" placeholder="display name" v-model="displayName">
            <input type="email" placeholder=" email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button>Sign Up</button>
        </form>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"
export default {

  setup(){
      let displayName=ref("");
      let email=ref("");
      let password=ref("");
      let error=ref("");
     let signUp=async()=>{
 try{
           let res=await auth.createUserWithEmailAndPassword(email.value,password.value)
           if(!res){
               throw new Error("could notcreate new user")
           }
           res.user.updateProfile({displayName:displayName.value})
 }
 catch(err){
       error.value=err.message;

 }
       
     }
      return {displayName,email,password,signUp}
  }
  

}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
</style>