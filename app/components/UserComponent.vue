<template>
<input type="text" v-model="firstName" placeholder="firstName">
<input type="text" v-model="lastName" placeholder="lastName">
<input type="text" v-model="email" placeholder="email">
</template>

<script setup lang="ts">
const firstName = defineModel<string>('firstName')
const lastName = defineModel<string>('lastName')
const email = defineModel<string>('email')
</script>
_____________________________________________
Создайте компонент UserForm для ввода:

имени (v-model:firstName)
фамилии (v-model:lastName)
email (v-model:email)
Каждое поле должно быть независимо связано с родительским компонентом.