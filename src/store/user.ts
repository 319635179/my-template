import {defineStore} from "pinia";
import {ref} from "vue";
import {AnyObject} from "@/interface/util.ts";

export const useUserStore = defineStore("user", () =>{
  const name = ref("");
  const username = ref("")
  const token = ref("");
  const isLogin = ref(false);

  const updateUser = (data: AnyObject) =>{
    name.value = data.name;
    username.value = data.username;
    token.value = data.token;
    isLogin.value = data.isLogin;
  }

  return {
    name,
    username,
    token,
    isLogin,
    updateUser
  }
})