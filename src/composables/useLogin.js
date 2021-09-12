import { auth } from '../firebase/config'
import { ref } from '@vue/reactivity'
let error=ref("")


let signIn=async(email,password)=>{
    try{
        let res= await auth.signInWithEmailAndPassword(email,password)
        if(! res){
            throw new Error("can't login account")
        }
        return res;

}catch(err){
    error.value=err.message
}
}

let useLogin=()=>{
    return {error,signIn}
}
export default useLogin

