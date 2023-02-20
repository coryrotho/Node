<template lang="pug">
q-table(
	:rows=""
)
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({
	columns: Array,
	key: String,
	rows: Array,

})

let test = ref("");

onMounted(() => {
})
</script>

<style>
</style>