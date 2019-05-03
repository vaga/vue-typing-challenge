<template>
  <div class="app-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-button-group'
}
</script>

<style>
.app-button-group {
  display: flex;
}

.app-button-group .app-button {
  flex: 1 1;
}
</style>
