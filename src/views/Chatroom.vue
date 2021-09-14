<template>
  <div class="container">
        <Navbar/>
        <ChatWindow/>
        <NewChatForm/>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import { watch } from '@vue/runtime-core'
export default {
  components: { Navbar ,NewChatForm, ChatWindow},
  setup(){
    let{user}=getUser();
    let router=useRouter();
    watch(user,()=>{
      if(!user.value){
        // redirect welcome
      router.push('/');
      }
    })
  }

}
</script>

<style>

</style>