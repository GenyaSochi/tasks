<template>
  <p>Задача 2: "Список дел (To-Do List)"</p>
  <form @submit.prevent="addText" class="view-list">
    <input type="text" placeholder="Добавить дело" v-model="text">
    <button>Добавить</button>
  </form> 
  <div class="all-text">
    <p v-if="!toDo.length">Список пуст</p>
    <ol>      
      <li v-for="el, i of toDo" :key="el+i">
        {{ el }}
        <button @click="deleteItem(i)">Удалить</button>  
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const toDo = ref([] as string[])
const text = ref('')


const addText = () => {
  if (text.value) {
    toDo.value.push(text.value)
  }
  text.value = ''
}

const deleteItem = (i:number) => {
  toDo.value.splice(i, 1)//хотим удалить 1 элемент, удаляем значение по индексу
}

</script>

<style>
.view-list {
  display: flex;
  gap: 10px;
}

.all-text {
  display: flex;
}
</style>
_________________________________________________________________________________________________________________
Задача 2: "Список дел (To-Do List)"

Цель: Работа со списками (v-for), обработка ввода из формы и модификация массива.

Условие:
Создайте простой список дел:

Поле ввода (input) и кнопка "Добавить".

При нажатии на кнопку (или на Enter) текст из поля ввода добавляется в список.

Каждый элемент списка отображается как <ли> и имеет кнопку "Удалить", которая удаляет этот элемент из списка.

Если список пуст, отображается параграф "Список дел пуст".

Вопрос на понимание:

Почему важно назначать уникальный :key для каждого элемента в v-for?

Почему мы не можем напрямую изменять параметр элемента в цикле v-for (например, item.text = 'новый текст')? Что нужно сделать вместо этого?