<template>
  <button class="app-button" :class="classList" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'app-button',

  props: {
    color: {
      type: String
    }
  },

  computed: {
    classList () {
      return {
        'app-button--green': this.color === 'green',
        'app-button--yellow': this.color === 'yellow',
        'app-button--red': this.color === 'red'
      }
    }
  }
}
</script>

<style>
.app-button {
  margin: 0.5rem;
  padding: 1em;
  font-size: 1em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
  background: #333a4f;
  border-radius: 5px;
  border: 0;
  border-bottom: 3px solid rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: 0.5s;
}

.app-button:hover {
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 1);
}

.app-button--green {
  background: #3a774c;
}

.app-button--red {
  background: #773a3a;
}

.app-button--yellow {
  background: #77693a;
}
</style>
