<template>
    <div class="product-page">
        <div class="back">
            <RouterLink to="/">
                <p class="back__text">Назад</p>
            </RouterLink>
        </div>
        <div class="product-page__img">
            <img :src="product.imageUrl" alt="Sneaker" />
        </div>
        <div class="product-page__content">
            <div class='product-page__title'>
                <h2>{{ product.title }}</h2>
            </div>
            <div class='product-page__price'>
                <span>{{ product.price }} ₽</span>
            </div>
            <div class='product-page__description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                    dolorem
                    expedita corporis commodi mollitia.</p>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const product = ref({});

const getProductById = async (productId) => {
    try {
        const { data } = await axios.get(`https://604781a0efa572c1.mokky.dev/items/${productId}`);
        product.value = data;
    } catch (error) {
        console.error(`Failed to fetch product with id ${productId}:`, error);
        throw error;
    }
};

const router = useRouter();
const productId = Number(router.currentRoute.value.params.id);

onMounted(() => {
    getProductById(productId);
});
</script>

<style lang="scss" scoped>
.back {
    margin: 10px 0px;

    a {
        color: #000;
        font-size: 16px;
        font-family: "Roboto-Medium";
        text-decoration: none;
    }
}

.product-page {
    &__img {
        text-align: center;

        img {
            width: auto;
            height: 300px;
        }
    }

    &__content {
        position: absolute;
        left: 0px;
        right: 0px;
        padding: 35px 20px;
        height: 100%;
        box-shadow: 0px -10px 15px 0px rgba(0, 0, 0, 0.17);
        border-radius: 40px 40px 0px 0px;
        background-color: #fff;
    }

    &__title {
        margin-bottom: 20px;

        h2 {
            font-family: "Roboto-Medium";
            font-size: 24px;
        }
    }

    &__price {
        margin-bottom: 20px;

        span {
            font-family: "Roboto-Medium";
            font-size: 20px;
        }
    }

    &__description {
        p {
            font-size: 16px;
        }
    }
}
</style>