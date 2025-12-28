<template>
  <form>
    <p>Введите имя</p>
    <!-- <input type="text" placeholder="имя" v-model="variableRef"> -->
    <input type="text" placeholder="имя" v-model="variableReactive.name">{{ variableReactive.name }}
    <p>Введите фамилию</p>
    <input type="text" placeholder="фамилия" v-model="variableReactive.surname">{{ variableReactive.surname }}
  </form>
  <button @click="reset">сбросить</button>
<hr>
  <button @click="counter.decrement">-</button>{{ counter.counter }}
  <button @click="counter.increment">+</button>
  <button @click="counter.reset">сброс</button>

</template>

<script setup lang="ts">
import {useCounter} from '~/composables/useCounter';
const counter = useCounter()
const variableRef = ref()
const variableReactive = reactive({
  name: '',
  surname: '',
})

const reset = () => {
  variableReactive.name = ''
  variableReactive.surname = ''
}
</script>
<style></style>

______________________________________________________________________________
Продемонстрируйте разницу между ref и reactive:

Создайте две переменные: одну через ref (объект), другую через reactive
Напишите функцию, которая пытается перезаписать обе переменные полностью
Объясните в комментариях, почему поведение различается