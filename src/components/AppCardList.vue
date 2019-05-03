<template>
  <div class="app-card-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-card-list'
}
</script>

<style>
.app-card-list {
  display: flex;
}
</style>
