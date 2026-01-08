<template>
  <h1><slot name="title">Заголовок по умолчанию</slot></h1>
  <ul v-for="el,i of list" :key="el.id">
    <li ref="comp"><slot name="listItem" :el="el" :i="i" :remove="remove"><input v-model="el.text" type="text"><button @click="remove(i)">X</button></slot></li>
  </ul>
  <slot name="emptyList" v-if="!list?.length">Тут пока пусто</slot>
  <button @click="add">Добавить</button>
</template>

<script setup lang="ts">
const comp = ref()
const list = defineModel<{id:number, text:string}[]>()
const add = async() => {
  // @ts-ignore
  const lastId = list.value.length ? list.value[list.value.length-1].id : 0;
  list.value?.push({id:lastId + 1, text:''})
  await nextTick()
  if (comp.value) {
    const lastLi = comp.value[comp.value.length-1]
    const input = lastLi.querySelector('input')
    if (input) input.focus()
  }
}
const remove = (i:number) => {
  list.value?.splice(i,1)
}
</script>
____________________________________________________
Создайте компонент EditableList:

v-model: принимает массив элементов
ref: кнопка "Добавить" фокусируется на новом input
slots:
Именованный слот для заголовка
Scoped slot для отображения каждого элемента с возможностью редактирования
Слот для пустого состояния

Функционал:
Добавление новых элементов
Редактирование по клику
Удаление элементов

Кастомное оформление через слоты