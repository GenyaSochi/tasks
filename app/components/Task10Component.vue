<template>
  <button @click="counter.decrement">-</button>{{ counter.counter }}
  <button @click="counter.increment">+</button>
  <button @click="counter.reset">сброс</button>
</template>
<script setup lang="ts">
import {useCounter} from '~/composables/useCounter';
const counter = useCounter()
</script>
<style></style>
___________________________________________________________
Создайте пользовательскую композаблу useCunter:

Она должна возвращать count, increment, decrement, reset
Используйте ref внутри композаблы
Импортируйте и используйте эту композаблу в двух разных компонентах