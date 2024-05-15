<script>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination],
        };
    },
};
</script>

<template>
    <div class="card-banner-slider">
        <h2>Предложения дня</h2>
        <swiper :modules="modules" :pagination="{ clickable: true }" :slides-per-view="1" :space-between="50"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <div class="card-banner-slider__item">
                    <div class="card-banner-slider__img">
                        <img src="../../public/sneakers/sneakers-1.jpg" alt="">
                    </div>
                    <div class="card-banner-slider__info">
                        <div class="card-banner-slider__price">
                            <p class="card-banner-slider__price_discount">9900₽</p>
                            <s class="card-banner-slider__price_base">15000₽</s>
                        </div>
                        <p class="card-banner-slider__title">Nike Air Forse</p>
                        <span class="card-banner-slider__descr">С мягкой подошвой и прекрасной замшей</span>
                    </div>

                    <div class='card-banner-slider__favorite'>
                        <img :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Favorite" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card-banner-slider__item">
                    <div class="card-banner-slider__img">
                        <img src="../../public/sneakers/sneakers-1.jpg" alt="">
                    </div>
                    <div class="card-banner-slider__info">
                        <div class="card-banner-slider__price">
                            <p class="card-banner-slider__price_discount">9900₽</p>
                            <s class="card-banner-slider__price_base">15000₽</s>
                        </div>
                        <p class="card-banner-slider__title">Nike Air Forse</p>
                        <span class="card-banner-slider__descr">С мягкой подошвой и прекрасной замшей</span>
                    </div>

                    <div class='card-banner-slider__favorite'>
                        <img :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Favorite" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card-banner-slider__item">
                    <div class="card-banner-slider__img">
                        <img src="../../public/sneakers/sneakers-1.jpg" alt="">
                    </div>
                    <div class="card-banner-slider__info">
                        <div class="card-banner-slider__price">
                            <p class="card-banner-slider__price_discount">9900₽</p>
                            <s class="card-banner-slider__price_base">15000₽</s>
                        </div>
                        <p class="card-banner-slider__title">Nike Air Forse</p>
                        <span class="card-banner-slider__descr">С мягкой подошвой и прекрасной замшей</span>
                    </div>

                    <div class='card-banner-slider__favorite'>
                        <img :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Favorite" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card-banner-slider__item">
                    <div class="card-banner-slider__img">
                        <img src="../../public/sneakers/sneakers-1.jpg" alt="">
                    </div>
                    <div class="card-banner-slider__info">
                        <div class="card-banner-slider__price">
                            <p class="card-banner-slider__price_discount">9900₽</p>
                            <s class="card-banner-slider__price_base">15000₽</s>
                        </div>
                        <p class="card-banner-slider__title">Nike Air Forse</p>
                        <span class="card-banner-slider__descr">С мягкой подошвой и прекрасной замшей</span>
                    </div>

                    <div class='card-banner-slider__favorite'>
                        <img :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Favorite" />
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.card-banner-slider {
    margin-bottom: 20px;

    h2 {
        margin-bottom: 5px;
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

    &__item {
        display: flex;
        justify-content: space-between;
        border-radius: 25px;
        background-color: #fff;
        padding: 20px 20px 30px 20px;
    }

    &__price {
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        &_discount {
            font-family: "Roboto";
            font-size: 18px;
            color: #f95353;
        }

        &_base {
            font-family: "Roboto-Regular";
            margin-left: 5px;
            font-size: 12px;
            color: #9f9b9b;
        }
    }

    &__title {
        font-family: "Roboto-Regular";
        font-size: 18px;
        margin-bottom: 5px;
    }

    &__descr {
        font-size: 10px;
        color: #9f9b9b;
    }

    &__img {
        width: 55%;
        text-align: center;

        img {
            width: 160px;
            height: auto;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
    }
}
</style>