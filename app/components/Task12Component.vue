<template> 
  <form @submit.prevent="send">
  <input type="text" v-model="user.email" placeholder="email">
  <input type="text" v-model="user.password" placeholder="password">
  <input type="text" v-model="user.confirmPassword" placeholder="confirmPassword">
  <p v-if="isFirstSend && error">{{ error }}</p>
  <button :disabled="isFirstSend && !validation">отправить</button>  
  </form>  
</template>
<script setup lang="ts">

const error = ref('')
const isFirstSend = ref(false)

const user = ref({
  email: '',
  password: '',
  confirmPassword: '',
})

const validation = computed(() =>{
  if(user.value.email){
    const simpleEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!simpleEmailRegex.test(user.value.email)) {
      error.value = 'проверьте email'
      return false
    }
  } 
  if(user.value.password && (user.value.password != user.value.confirmPassword)) {
      error.value = 'проверьте пароль'
      return false
  }
  error.value = ''
  return true
})

function send(){
  isFirstSend.value = true  
}
</script>
<style></style>
_____________________________________________
Создайте сложную форму валидации:

Используйте ref для объекта формы с полями: email, password, confirmPassword
Создайте вычисляемые свойства для валидации каждого поля
Добавьте ref для отслеживания, была ли форма отправлена
Показывайте ошибки только после первой попытки отправки
Блокируйте кнопку отправки при невалидных данных