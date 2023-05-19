import { createPinia } from 'pinia'
import {useUserStore} from "@/store/user.ts";
const pinia = createPinia()
export default pinia;

export const store = {
  user: useUserStore(pinia),
}