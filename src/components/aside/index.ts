import { ref } from "vue";

export const collapse = ref(false);

export const handleCollapse = () => {
  collapse.value = !collapse.value;
};
