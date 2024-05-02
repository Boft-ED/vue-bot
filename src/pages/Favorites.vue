<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import CardList from '../components/CardList.vue'

const favorites = ref([]);

onMounted(async () => {
    try {
        const { data } = await axios.get(`https://0a3cf8bb89e4ac13.mokky.dev/favorites?_relations=items`)

        favorites.value = data.map((obj) => obj.item);
    } catch (err) {
        console.log(err);
    }
})

</script>

<template>
    <CardList :items="favorites" is-favorites />
</template>