<script setup>
import axios from 'axios';
import CardList from '../components/CardList.vue';
import { inject, reactive, watch, ref, onMounted } from 'vue';

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
    sortBy: 'title',
    searchQuery: '',
});

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
    <div class="search">
        <div class="back">
            <RouterLink to="/">
                <p class="back__text">Назад</p>
            </RouterLink>
        </div>
        <div class="search__bar">
            <input @input="onChangeSearchInput" type="text"
                class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
                placeholder="Поиск..." />
        </div>
        <div class="search__content" v-if="filters.searchQuery !== ''" v-auto-animate>
            <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddCart" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.back {
    margin: 25px 0px;

    a {
        color: #000;
        font-size: 16px;
        font-family: "Roboto-Medium";
        text-decoration: none;
    }
}

.search {
    &__bar {
        position: relative;
        margin-bottom: 25px;

        input {
            border-radius: 10px;
            background-color: #fff;
            width: 100%;
            padding: 10px 28px 10px 15px;
            font-size: 16px;
            color: #797979;
            border: 2px solid #f5f5f5;
        }

        &::after {
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z' stroke='%23E4E4E4' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            content: "";
            width: 16px;
            height: 16px;
            right: 10px;
            top: 11px;
            position: absolute;
            display: inline-block;
        }

    }
}
</style>