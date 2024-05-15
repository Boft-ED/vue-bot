<template>
    <div class="card-page">
        <div class="card-page__img">
            <div class="back">
                <RouterLink to="/">
                    <p class="back__text">Назад</p>
                </RouterLink>
            </div>
            <img :src="product.imageUrl" alt="Sneaker" />
        </div>
        <div class="card-page__content">
            <div class="card-page__title">
                <h2>{{ product.title }}</h2>
            </div>
            <div class="card-page__price">
                <span>{{ product.price }} ₽</span>
            </div>
            <div class="card-page__color product-color">
                <p>Цвета: </p>
            </div>
            <div class="card-page__size product-size">
                <div class="product-size__title">
                    <p>Выбирите размер</p>
                    <span>Помощь в выборе</span>
                </div>
                <div class="product-size__switcher">
                    <div class="product-size__item">
                        <span>38</span>
                    </div>
                    <div class="product-size__item">
                        <span>39</span>
                    </div>
                    <div class="product-size__item">
                        <span>40</span>
                    </div>
                    <div class="product-size__item">
                        <span>41</span>
                    </div>
                    <div class="product-size__item">
                        <span>42</span>
                    </div>
                    <div class="product-size__item">
                        <span>43</span>
                    </div>
                    <div class="product-size__item">
                        <span>44</span>
                    </div>
                </div>
            </div>
            <div class="card-page__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                    dolorem
                    expedita corporis commodi mollitia.</p>
            </div>
            <div class="card-page__buy">
                <a href="#">Купить</a>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const product = ref({});
const originalBackgroundColor = ref('');

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
    originalBackgroundColor.value = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#f1f5f8';
});

onBeforeUnmount(() => {
    document.body.style.backgroundColor = originalBackgroundColor.value;
});


</script>

<style lang="scss" scoped>
.card-page {
    &__img {
        text-align: center;
        position: relative;

        img {
            width: 100%;
            height: auto;
        }
    }

    &__content {
        position: absolute;
        left: 0px;
        right: 0px;
        padding: 35px 20px 70px 20px;
        box-shadow: 0px -10px 15px 0px rgba(0, 0, 0, 0.17);
        border-radius: 40px 40px 0px 0px;
        background-color: #fff;
    }

    &__title {
        margin-bottom: 20px;

        h2 {
            font-size: 24px;
        }
    }

    &__price {
        display: inline-flex;

        span {
            font-family: "Roboto-Medium";
            font-size: 20px;
        }
    }

    &__color {
        display: inline-flex;
    }

    &__size {
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .product-size {
        &__title {
            display: flex;
            align-items: baseline;
            margin-bottom: 15px;

            p {
                font-size: 18px;
            }

            span {
                color: #9f9b9b;
                margin-left: 10px;
                font-size: 10px;
            }
        }

        &__switcher {
            display: flex;
            padding-bottom: 15px;
            border-bottom: 1px solid #9f9b9b;
            width: 100%;
            overflow: auto;
        }

        &__item {
            background-color: #fff;
            border: 1px solid #000;
            padding: 7px;
            border-radius: 50%;
            margin-right: 20px;
            transition: 0.3s;

            span {
                font-size: 16px;
            }

            &:last-child {
                margin-right: 0;
            }

            &:hover {
                background-color: #000;

                span {
                    color: #fff;
                }
            }
        }
    }

    &__description {
        margin-bottom: 20px;

        p {
            font-size: 16px;
        }
    }

    &__buy {
        a {
            text-decoration: none;
            background-color: #000;
            color: #fff;
            display: block;
            text-align: center;
            padding: 10px 20px;
            width: 100%;
            border-radius: 5px;
        }
    }
}
</style>