<script setup>
import { computed, provide, ref, watch } from 'vue';

import Header from './components/Header.vue';
import Drawer from './components/Drawer.vue';
import Menu from './components/Menu.vue';

// корзина 
const cart = ref([])


const drawerOpen = ref(false);

const totalPrice = computed(
  () => cart.value.reduce((acc, item) => acc + item.price, 0)
);

const vatPrice = computed(
  () => Math.round((totalPrice.value * 5) / 100)
)


const closeDrawer = () => {
  drawerOpen.value = false;
}

const openDrawer = () => {
  drawerOpen.value = true;
}

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}, { deep: true });


provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})


</script>

<template>
  <div>
    <Header :total-price="totalPrice" @open-drawer="openDrawer" />
    <RouterView />
    <Menu />
  </div>

</template>
