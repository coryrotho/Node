<template lang="pug">
span {{ hash }}  
span {{ allUsers }}
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/userStore.js';

const userStore = useUserStore();

let hash = ref("");
let allUsers = ref([]);

onMounted(() => {
  console.log("User Component Mounted");
  hash.value = userStore.hashPassword("test hashing");
  allUsers = userStore.getAllUsers();
})
</script>

<style>
</style>