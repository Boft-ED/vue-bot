<script setup>
import axios from 'axios';
import CardList from '../components/CardList.vue';
import CardSlider from '../components/CardBannerSlider.vue';
import { inject, reactive, watch, ref, onMounted } from 'vue';

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
});


const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const onClickAddCart = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item)
  }

  console.log(cart);
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parantId: item.id,
        item
      }
      const { data } = await axios.post(`https://0a3cf8bb89e4ac13.mokky.dev/favorites`, obj)

      item.isFavorite = true
      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://0a3cf8bb89e4ac13.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err);
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://0a3cf8bb89e4ac13.mokky.dev/favorites`)

    items.value = items.value.map(item => {
      const favorite = favorites.find(favorite => favorite.parantId == item.id)

      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorite: true,
      };
    });
  } catch (err) {
    console.log(err);
  }
}

const fetchItems = async () => {
  try {

    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(
      `https://604781a0efa572c1.mokky.dev/items`,
      {
        params
      }
    )

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }))

  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart');
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems();
  await fetchFavorites();

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => (cartItem.id === item.id))
  }))
})

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }))
})

watch(filters, fetchItems);
</script>

<template>
  <div>
    <CardSlider />
    <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddCart" />
  </div>
</template>