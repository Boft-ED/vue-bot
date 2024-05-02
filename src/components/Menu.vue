<script setup>
</script>

<template>
    <div className="footer">
        <div className="footer__content">
            <div className="footer__item">
                <RouterLink to="/search">
                    <a>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Происк
                    </a>
                </RouterLink>
            </div>
            <div className="footer__item">
                <RouterLink to="/favorites">
                    <a>
                        <svg fill="#000000" height="800px" width="800px" version="1.1" id="XMLID_298_"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,23.2l-0.6-0.5C8.7,20.7,0,13.5,0,7.3C0,3.8,2.9,1,6.5,1c2.2,0,4.3,1.1,5.5,2.9l0,0l0,0C13.2,2.1,15.3,1,17.5,1
		C21.1,1,24,3.8,24,7.3c0,6.3-8.7,13.4-11.4,15.5L12,23.2z M6.5,2.9C4,2.9,2,4.8,2,7.2c0,4.1,5.1,9.5,10,13.4
		c4.9-3.9,10-9.3,10-13.4c0-2.4-2-4.3-4.5-4.3c-1.6,0-3,0.8-3.8,2L12,7.6L10.3,5C9.5,3.7,8.1,2.9,6.5,2.9z" />
                        </svg>
                        Желаемое
                    </a>
                </RouterLink>
            </div>
            <div className="footer__item">
                <RouterLink to="/basket">
                    <a>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M20 10H18M20 10H21M4 10H3M4 10H6M6 10H18M6 10L9 4M18 10L15 4M9 13V16M12 13V16M15 13V16"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Корзина
                    </a>
                </RouterLink>
            </div>
            <div className="footer__item">
                <RouterLink to="/">
                    <a>
                        <svg width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h48v48H0z" fill="none" />
                            <g id="Shopicon">
                                <path
                                    d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
		c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8
		s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z" />
                            </g>
                        </svg>
                        Аккаунт
                    </a>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px 20px;
    z-index: 1000;
    box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.17);

    &__content {
        display: flex;
        justify-content: space-between;
    }

    &__item {
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #999;
            text-decoration: none;
            transition: 0.3s;
            font-size: 12px;

            &:hover {
                color: #000;
            }

            svg {
                margin-bottom: 5px;
                width: 18px;
                height: 18px;
            }
        }
    }
}
</style>