<template>
  <p>Создать компонент профиля пользователя</p>
  <form @submit.prevent>
    <p>Введите имя</p>
    <input type="text" placeholder="имя" v-model="user.name">{{ user.name }}
    <p>Введите возраст</p>
    <input type="text" placeholder="возраст" v-model="user.age">{{ user.age }}
    <p>Введите электронную почту</p>
    <input type="text" placeholder="почта" v-model="user.email">{{ user.email }}
    <br>
    <button @click="reset">сбросить</button>
  </form>
</template>

<script setup lang="ts">
const user = reactive({
  name: '',
  age: '',
  email: '',
})

const reset = () => {
  user.name = ''
  user.age = ''
  user.email = ''
  // user.value = {
  //   name: '',
  //   age: '',
  //   email: '',
  // }
}

</script>
<style></style>