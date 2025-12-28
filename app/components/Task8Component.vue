<template>
  <form>
    <input ref="comp" type="text">
  </form>
  <button @click="comp.focus()">Фокус</button>
</template>
<script setup lang="ts">
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