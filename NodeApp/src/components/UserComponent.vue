<template lang="pug">
div user component
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/userStore.js';
import { v4 as uuidv4 } from 'uuid';

const userStore = useUserStore();

let hash = ref("");
let allUsers = ref([]);

onMounted(() => {
	console.log("User Component Mounted");
	
	// Load all User Data into the store
	userStore.getAllUsers();
	
	// hash.value = userStore.hashPassword("password");
	// userStore.saveUser({
		//   userUID: uuidv4(),
		//   username: "coryrotho",
		//   password: userStore.hashPassword("password").toString(),
		//   firstName: "cory",
		//   lastName: "rothenberger",
		// });
	})
</script>

<style>
</style>