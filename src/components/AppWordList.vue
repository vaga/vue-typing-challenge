<template>
  <ul class="app-word-list">
    <li class="app-word-list__item">
      {{ hasPreviousWord ? previousWord : '' }}
    </li>
    <li class="app-word-list__item app-word-list__item--current">
      {{ hasCurrentWord ? currentWord : '' }}
    </li>
    <li class="app-word-list__item app-word-list__item--next">
      {{ hasNextWord ? nextWord : '' }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'app-word-list',

  props: {
    words: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },

  methods: {
    hasWordIndex (offset) {
      let index = this.currentIndex + offset

      if (index < 0 && index >= this.words.length) {
        return false
      }

      return true
    },

    getWord (offset) {
      let index = this.currentIndex + offset
      return this.words[index]
    }
  },

  computed: {
    hasPreviousWord () {
      return this.hasWordIndex(-1)
    },

    hasCurrentWord () {
      return this.hasWordIndex(0)
    },

    hasNextWord () {
      return this.hasWordIndex(1)
    },

    previousWord () {
      return this.getWord(-1)
    },

    currentWord () {
      return this.getWord(0)
    },

    nextWord () {
      return this.getWord(1)
    }
  }
}
</script>

<style>
.app-word-list {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 100%;
  height: 1.5em;
  margin: 0.5rem;
  padding: 5em;
  background: rgba(0, 0, 0, .2);
}
.app-word-list__item {
  flex-basis: 25rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-transform: lowercase;
  font-size: 1.5em
}

.app-word-list__item--current {
  flex-basis: 30rem;
  font-size: 3em;
  font-weight: bold;
  color: rgba(254, 254, 254, 1);
}

.app-word-list__item--next {
  font-size: 2.5em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
}

</style>
