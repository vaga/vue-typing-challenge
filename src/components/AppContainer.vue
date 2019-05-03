<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-container'
}
</script>

<style>
.app-container {
  text-align: center;
  width: 30rem;
}
</style>
