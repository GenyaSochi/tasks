<template>
  <form>
    <input type="text" v-model="num1">
    +
    <input type="text" v-model="num2">
    = 
    <span :style="isResultPositive">{{ sum }} </span>
  </form>
</template>

<script setup lang="ts">
const num1 = ref()
const num2 = ref()

const sum = computed(() => {
  if (+num1.value && +num2.value) {
    return +num1.value + +num2.value
  } else if (+num1.value || +num2.value) {
    return +num1.value || +num2.value
  } else {
    return 0
  }
})

const isResultPositive = computed(() =>{
  if(sum.value >= 0){
    return 'color: green'
  }
  return 'color: red'
})
</script>
<style></style>
___________________________________________________________
Создайте калькулятор:

Используйте два ref для чисел num1 и num2
Создайте вычисляемое свойство computed, которое возвращает сумму
Создайте вычисляемое свойство isResultPositive, которое проверяет, положительна ли сумма
Изменяйте цвет результата в зависимости от знака