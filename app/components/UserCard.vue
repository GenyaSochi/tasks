<template>
  <div class="card">
    <h2><i>Карточка клиента</i></h2>
    <slot name="stats" >{{ user.posts }} {{ user.comments }}</slot><br>
    <slot>{{ user.id }} {{ user.name }} {{ user.email }}</slot>
    <div class="but">
      <button v-if="currentUserId==user.id">редактировать</button>
      <button v-if="currentUserId==user.id">удалить</button>
      <button v-if="currentUserId!=user.id">скрыть</button>
    </div>
  </div>
</template>

<script setup lang="ts">

const active = defineModel<boolean>('active')
const role = defineModel<'user' | 'moderator' | 'admin'>('role')

defineProps(['currentUserId','user'])

const edit = () => {
}

const remov = () => {

}
</script>
<style scoped>
.card {
  background-color: crimson;
  color: white;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;  
}

.but {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
____________________________________________________
Создайте многоразовый компонент UserCard, который:

1. Ожидает входные параметры:
userId (Number, обязательный) — ID пользователя
userName (String, обязательный) — Имя пользователя
userEmail (String, необязательный) — Email пользователя

2. Содержит слоты:
Default slot — для основного контента карточки
Именованный slot actions — для кнопок действий (редактировать, удалить и т.д.)
Scoped slot stats — который передает объект { posts: 5, comments: 12 } в родительский компонент, где эти значения можно
отобразить

3. Компонент должен поддерживать:
v-model:active — для управления состоянием активности карточки (Boolean)
v-model:role — для управления ролью пользователя (String: 'user', 'moderator', 'admin')