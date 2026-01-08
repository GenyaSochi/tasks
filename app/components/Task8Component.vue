<template>
  <form>
    <input ref="comp" type="text">
  </form>
  <button @click="comp.focus()">Фокус</button>
  <EditableList v-model="list">
    <template #title>Из родителя</template>
    <template #emptyList>Добавьте элемент</template>
    <template #listItem="{el, i, remove}">
      &gt;<input type="text" placeholder="пиши" v-model="el.text"/>|||<button @click="remove(i)">X</button>&gl;
    </template>
  </EditableList>
  {{ list }}
</template>

<script setup lang="ts">
const list = ref([
  {id:1, text: 'asdasd'},
  {id:2, text: '1asdasd'},
  {id:3, text: 'a2sdasd'},
])
const comp = ref()
onMounted(()=>{
  comp.value.focus()
})
</script>
<style></style>
___________________________________________________________
Создайте компонент с фокусом на input:

Используйте шаблонный ref для получения ссылки на input элемент
Добавьте кнопку "Фокус", которая устанавливает фокус в input
При монтировании компонента автоматически устанавливайте фокус