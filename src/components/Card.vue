<script setup>

const props = defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function,
});

</script>

<template>
  <div class='product'>
    <div class="product__img">
      <img :src="imageUrl" alt="Sneaker" />
    </div>
    <div class='product__price'>
      <span>{{ price }}₽</span>
    </div>
    <RouterLink :to="{ name: 'ProductPage', params: { id: Number(id) } }">
      <div class='product__title'>{{ title }}</div>
      <div class='product__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorem
        expedita corporis commodi mollitia.</div>
    </RouterLink>
    <div v-if="onClickFavorite" @click="onClickFavorite" class='product__favorite'>
      <img :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Favorite" />
    </div>

    <!-- <img v-if="onClickAdd" @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus" /> -->
  </div>


</template>

<style lang="scss" scoped>
.product {
  width: 47%;
  position: relative;

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  &__img {
    border-radius: 25px;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 5px;
    text-align: center;

    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
  }

  &__price {
    font-family: "Roboto";
    font-size: 16px;
    margin-bottom: 3px;
  }

  &__title {
    font-family: "Roboto-Regular";
    font-size: 14px;
    margin-bottom: 3px;
  }

  &__description {
    font-size: 10px;
    margin-bottom: 3px;
    color: #999;
  }

  &__favorite {
    position: absolute;
    top: 10px;
    cursor: pointer;
    right: 10px;
    z-index: 10;

    img {
      width: 25px;
      height: 25px;
      background-color: #f5f5f5;
      padding: 5px;
      border-radius: 25px;
    }
  }

  &__add-btn {}
}
</style>