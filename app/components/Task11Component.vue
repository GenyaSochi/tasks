<template>
  <div v-if="isLoading">загрузка...</div>
  <div v-else>
    <div v-if="data">{{ data }}</div>
    <div v-else>{{ error }}</div>
  </div>
  <button @click="update">обновить</button> 
</template>
<script setup lang="ts">
const isLoading = ref(false)
const data = ref(null as any)
const error = ref('')

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.round(Math.random())), 2000)
  })
}

async function fetchData(){
  isLoading.value = true
  const result = await sleep()
  isLoading.value = false
  if(result){
    data.value = [1]
    error.value = ''
  }else{
    data.value = null
    error.value = 'повторите попытку'
  }
}
fetchData()
const update = async () =>{
  await fetchData()
}
</script>
<style></style>
________________________________________________
Создайте компонент загрузки данных:

Используйте ref для isLoading (булево), data (массив), error (строка)
Реализуйте функцию fetchData, которая имитирует асинхронный запрос
Показывайте состояние загрузки, ошибки или данные
Добавьте кнопку "Обновить" для повторного запроса