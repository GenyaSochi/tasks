<template>
<div>
  <h1>Blackjack</h1>
  <p class="text">Цель: набрать сумму очков, как можно ближе к 21, но не более 21, и при этом побить дилера (или других игроков, в зависимости от варианта)</p>
  <p>Пример для колоды 36 карт (6–14): 6–10 — по номиналу, 11(В),12(Д),13(К) = 10, 14(А) = 1 или 11.</p>  
</div>
<div>
  <button @click="shuffle">Перемешать</button>
  <button @click="distribute">Раздать карты</button>
  <TransitionGroup>

  </TransitionGroup>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const cardsRefence = [
  { type: 1, value: 6, status: 1 },
  { type: 1, value: 7, status: 1 },
  { type: 1, value: 8, status: 1 },
  { type: 1, value: 9, status: 1 },
  { type: 1, value: 10, status: 1 },
  { type: 1, value: 11, status: 1 },
  { type: 1, value: 12, status: 1 },
  { type: 1, value: 13, status: 1 },
  { type: 1, value: 14, status: 1 },
  { type: 2, value: 6, status: 1 },
  { type: 2, value: 7, status: 1 },
  { type: 2, value: 8, status: 1 },
  { type: 2, value: 9, status: 1 },
  { type: 2, value: 10, status: 1 },
  { type: 2, value: 11, status: 1 },
  { type: 2, value: 12, status: 1 },
  { type: 2, value: 13, status: 1 },
  { type: 2, value: 14, status: 1 },
  { type: 3, value: 6, status: 1 },
  { type: 3, value: 7, status: 1 },
  { type: 3, value: 8, status: 1 },
  { type: 3, value: 9, status: 1 },
  { type: 3, value: 10, status: 1 },
  { type: 3, value: 11, status: 1 },
  { type: 3, value: 12, status: 1 },
  { type: 3, value: 13, status: 1 },
  { type: 3, value: 14, status: 1 },
  { type: 4, value: 6, status: 1 },
  { type: 4, value: 7, status: 1 },
  { type: 4, value: 8, status: 1 },
  { type: 4, value: 9, status: 1 },
  { type: 4, value: 10, status: 1 },
  { type: 4, value: 11, status: 1 },
  { type: 4, value: 12, status: 1 },
  { type: 4, value: 13, status: 1 },
  { type: 4, value: 14, status: 1 },
]
const cards = ref([...cardsRefence] as any[])

const gamer1 = ref()
const gamer2 = ref()

const types = {
  1: '♣️',
  2: '♦️',
  3: '♥️',
  4: '♠️',
} as any

const values = {
  11: 'В',
  12: 'Д',
  13: 'К',
  14: 'А',
} as any

function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function shuffle() {
  const max = cards.value.length - 1
  for (let i = 0; i < 500; i++) {
    const x = randomInteger(0, max)
    const y = randomInteger(0, max - 1)
    const card = cards.value.splice(x, 1)
    cards.value.splice(y, 0, card[0])
  }
}

function distribute() {
 
}

</script>
<style>
.text {
  font-size: 18px;
}

</style>