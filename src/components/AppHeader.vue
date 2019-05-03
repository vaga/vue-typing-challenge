<template>
  <header class="app-header">
    <h1 class="app-header__title">
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style>
.app-header {
  margin: 4rem 0;
}

.app-header__title {
  font-size: 3em;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  text-align: center;
}
</style>
