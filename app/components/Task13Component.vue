<template>
  <Card title="Приветствие" class="titleText">
    Добро пожаловать во Vue 3!
  </Card>
</template>

<script setup lang="ts">
import Card from './CardComponent.vue';
</script>

<style>
.titleText {
  background-color: black;
  color: white;
  height: 200px;
  width: 300px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
}
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
