<template>
  <div class="userForm">
    <p class="heading"><i>Создать компонент профиля пользователя</i></p>
    <form @submit.prevent>
      <p class="view"><i>Введите имя</i></p>
      <input type="text" placeholder="имя" v-model="user.name">
      <p class="view"><i>Введите возраст</i></p>
      <input type="text" placeholder="возраст" v-model="user.age">
      <p class="view"><i>Введите электронную почту</i></p>
      <input type="text" placeholder="почта" v-model="user.email">
      <br>
      <div>
        <button @click="reset" :style="resetBut" class="but">сбросить</button>
      </div>
    </form>
  </div>
  <ImputComonent v-model="text"></ImputComonent>
  <p>{{ text }}</p>
  <UserComponent v-model:firstName="firstName" v-model:lastName="lastName" v-model:email="email"></UserComponent>
  {{ firstName }}
  {{ lastName }}
  {{ email }}
</template>

<script setup lang="ts">
import ImputComonent from './ImputComonent.vue'
import UserComponent from './UserComponent.vue'


const firstName = ref('')
const lastName = ref('')
const email = ref('')
const text = ref('')

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

const resetBut = computed(() => {
  if (user.name || user.age || user.email) {
    return 'color:red'
  }
  return 'color: green'
})

</script>
<style scoped>
.userForm {
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
}

.heading {
  text-align: center;
  font-size: 20px;
}
.but {
  margin-top: 20px;
  width: 100px;
  font-weight: 600;
}
.view {
font-size: 18px;
margin: 0;
padding: 10px 10px 10px 0;
}
</style>