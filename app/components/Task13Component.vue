<template>
  <slot></slot>
  <!-- <Card title="Приветствие">{{ {text} }}</Card> -->
</template>
<script setup lang="ts">

import { ref } from 'vue'



// const props = defineProps(['text'])
// const text = ref(' Добро пожаловать во Vue 3!')
</script>

<style scoped>

</style>
______________________________________________________________________
Создайте компонент Card, который:
Принимает title через props
Имеет слот для контента
Используется в родительском компоненте так:

<!-- <Card title="Приветствие">
  Добро пожаловать во Vue 3!
</Card> -->

Ожидаемый результат: Карточка с заголовком "Приветствие" и текстом "Добро пожаловать во Vue 3!".
