<script setup>
import Card from "./Card.vue";

defineProps({
    items: Array,
    isFavorites: Boolean
})

const emit = defineEmits(['addToFavorite', 'addToCart'])

</script>

<template>
    <div class="card-list">
        <h2>Рекоммендации для тебя</h2>
        <div class='card-list__content'>
            <Card v-for="item in items" :key="item.id" :id="item.id" :title="item.title" :imageUrl="item.imageUrl"
                :price="item.price" :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
                :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)" :isFavorite="item.isFavorite"
                :isAdded="item.isAdded" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-list {
    margin-bottom: 40px;

    h2 {
        margin-bottom: 5px;
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
    }
}

.item {
    margin-bottom: 10px;
}
</style>