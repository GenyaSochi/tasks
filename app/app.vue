<template>
    <NuxtRouteAnnouncer />
    <Task1Component />
    <Task2Component />
    <Task3Component />
    <Task4Component />
    <Task5Component />
    <Task6Component />
    <Task7Component />
    <Task8Component />
    <Task9Component />
    <Task10Component />
    <Task11Component />
    <Task12Component />
    <Task13Component />
    <CardComponent />
    <UserCard v-for="user of users" :user="user" :key="user.id" :currentUserId="currentUserId" v-model:role="user.type" v-model:active="user.active">
        <template #stats>
            <p>Posts: {{ user.posts }}</p>
            <p>Comments: {{ user.comments }}</p>
        </template>
        <div>
            <p>Id: {{ user.id }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Name: {{ user.name }}</p>
        </div>
    </UserCard>  
</template>

<script setup lang="ts">
// const userStore = useUser()
const currentUserId=11
const users= ref([
    {   id: 11, email: 'i@best.me', name: 'winner', type:'admin', active:true, posts:0, comments:0},
    {   id: 12, email: 'i2@best.me', name: 'winner', type:'user', active:false, posts:4, comments:10},
    {   id: 13, email: 'i3@best.me', name: 'winner', type:'user', active:true, posts:40, comments:10},
    {   id: 14, email: 'i4@best.me', name: 'winner', type:'user', active:false, posts:2, comments:0},
    {   id: 15, email: 'i5@best.me', name: 'winner', type:'user', active:true, posts:1, comments:0},
    {   id: 16, email: 'i6@best.me', name: 'winner', type:'user', active:true, posts:6, comments:80},
    {   id: 17, email: 'i7@best.me', name: 'winner', type:'moderator', active:true, posts:0, comments:0},
] as {id:number, email:string, name:string, type: 'user' | 'admin' | 'moderator', active:boolean, posts:number, comments:number}[])

</script>