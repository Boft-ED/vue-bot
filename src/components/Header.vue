<template>
  <header>
    <div class="header">
      <div class="header__content">
        <div class="header__username">
          <span>
            Имя юзера
          </span>

        </div>
        <div class="header__burger">
          <p>Burger</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;


  &__username {
    span {
      font-family: "Roboto-Medium";
      font-size: 24px;
    }
  }

  &__burger {}

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
