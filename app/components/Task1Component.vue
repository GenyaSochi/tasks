<template>
  <div>
    <p>Задачи на понимание vue</p>
    <p>Задача 1: "Счетчик с ограничением"</p>
    <div class="view">
      <button class="btn" @click="counter--" :disabled="!counter">-</button>
      <p class="cnt">{{ counter }}</p>
      <button class="btn" @click="counter++">+</button>
    </div>
  </div>
  <LayoutComponent>
    <template #header>
      <div class="new">С</div>
    </template>
    <template #default>
      <div class="new">НОВЫМ</div>
    </template>
    <template #footer>
      <div class="new">ГОДОМ!</div>
    </template>
  </LayoutComponent>
</template>


<script setup lang="ts">
import LayoutComponent from './LayoutComponent.vue';
const counter = ref(0)

</script>

<style>
.btn {
  width: 60px;
}

.cnt {
  border: 1px solid black;
  width: 60px;
  text-align: center;
}

.view {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.new {
  text-align: center;
}
</style>
_________________________________________________________________________________________________________________
/Уровень 1: Базовое понимание (Синтаксис, Привязка данных, События)
Задача 1: "Счетчик с ограничением"

Цель: Проверить знание реактивных данных (ref), обработки событий (@click) и условной отрисовки (v-if/v-disabled).

Условие:
Создайте компонент счетчика, который:

Начинается с 0.

Имеет кнопку "+", которая увеличивает счетчик на 1.

Имеет кнопку "-", которая уменьшает счетчик на 1.

Кнопка "-" должна быть заблокирована (атрибут disabled), когда счетчик равен 0.

Текущее значение счетчика отображается на странице.

Вопрос на понимание:

Почему мы используем ref для переменной count, а не просто обычную переменную?

Как бы вы реализовали блокировку кнопки? Через v-if или v-disabled? В чем разница в данном контексте?
