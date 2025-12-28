import {ref} from 'vue'
const counter = ref(0)
export const useCounter = () => {
  const increment = () =>{
    counter.value++
  }
    const decrement = () =>{
    counter.value--
  }
  const reset = () =>{
    counter.value = 0
  }
  return {counter, increment, decrement, reset}
}