<template>
  <div class="app-card-list__item">
    <div class="app-card-list__item__title">
      {{ title }}
    </div>
    <div class="app-card-list__item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-card-list-item',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .app-card-list__item {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5em;
    margin: 0.5rem;
    text-align: center;
    flex: 1 1;
  }

  .app-card-list__item__title {
    font-size: 0.6em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .app-card-list__item__content {
    font-size: 1em;
  }
</style>
