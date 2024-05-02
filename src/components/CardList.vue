<script setup>
import Card from "./Card.vue";

defineProps({
    items: Array,
    isFavorites: Boolean
})

const emit = defineEmits(['addToFavorite', 'addToCart'])

</script>

<template>
    <div>
        <div class="list">
            <div class='list__content'>
                <Card v-for="item in items" :key="item.id" :id="item.id" :title="item.title" :imageUrl="item.imageUrl"
                    :price="item.price" :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
                    :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
                    :isFavorite="item.isFavorite" :isAdded="item.isAdded" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list {
    &__title {
        h2 {
            font-family: "Roboto-Medium";
            margin-bottom: 10px;
            font-weight: 400;
            font-size: 22px;
        }
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
    }
}

.item {
    margin-bottom: 10px;
}
</style>