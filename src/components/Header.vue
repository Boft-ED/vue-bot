<template>
  <header>
    <div class="header">
      <div class="header__content">
        <div class="header__username">
          <h2>Привет, <span>Alex</span></h2>
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
  margin-bottom: 20px;

  &__username {
    h2 {
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
