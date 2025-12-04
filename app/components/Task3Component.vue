<template>
  <p>Задача 3: "Создать форму с полем ввода пароля"</p>
  <form>
    <input type="text" placeholder="введите пароль" v-model="pass">
    <button :disabled="isDisabled">зарегистрироваться</button>
    <p>Пароль должен содержать</p>
    <p :style="`color:${upper?'green':'red'}`">символы в верхнем регистре</p>
    <p :style="`color:${lower?'green':'red'}`">символы в нижнем регистре</p> 
    <p :style="`color:${num?'green':'red'}`">цифры</p>
    <p :style="`color:${minLength?'green':'red'}`">минимальная длинна 8 символов</p>
  </form>

</template>

<script setup lang="ts">

const pass = ref('')
const minLength = ref(false)
const upper = ref(false)
const lower = ref(false)
const num = ref(false)

const isUpperCase = new RegExp(/[A-Z]/)
const isLowerCase = new RegExp(/[a-z]/)
const isNumber = new RegExp(/[0-9]/)

const isDisabled = computed(()=>{
  minLength.value = pass.value.length>=8
  upper.value = isUpperCase.test(pass.value)
  lower.value = isLowerCase.test(pass.value)
  num.value = isNumber.test(pass.value)
  
  if (minLength.value && upper.value && lower.value && num.value) return false
  return true
})


</script>

<style></style>
_________________________________________________________________________________________________________________________
Создать форму с полем ввода пароля, требованиями к паролю и кнопкой регистрации, которая по умолчанию отключена
(disabled)

Требования: символы в верхнем регистре, символы в нижнем регистре, цифры, минимальная длинна 8 символов

Требования должны визуально показывать, что они выполнены.

Когда выполнены все требования, убираем disabled с кнопки регистрации