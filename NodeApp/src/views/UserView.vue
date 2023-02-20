<template lang="pug">
div#user-div
	UserComponent
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/userStore.js';
import UserComponent from '../components/UserComponent.vue';

const userStore = useUserStore();

onMounted(() => {
})

</script>

<style>
</style>
