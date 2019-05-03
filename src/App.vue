<template>
  <main class="app">
    <app-header>Typing Challenge</app-header>

    <app-container>
      <app-button-group>
        <app-button
          v-for="(category, index) in categories"
          :key="index"
          :color="index === currentCategoryIndex ? 'green' : ''"
          @click="selectCategory(index)"
        >{{ category.name }}</app-button>
      </app-button-group>
    </app-container>

    <app-word-list
      :words="currentCategoryWords"
      :currentIndex="currentWordIndex"
    ></app-word-list>

    <app-container>
      <input
        class="app__word-input"
        :class="{'app__word-input--matched': isCorrectWord, 'app__word-input--error': isIncorrectWord}"
        type="text"
        :value="typedWord"
        @input="updateTypedWord"
        v-on:keyup.enter="submitWord"
        placeholder="Give me some words..."
      />
    </app-container>

    <app-container>
      <app-card-list>
        <app-card-list-item title="Words">
          {{ typedWordsCount }}/{{ currentCategoryWords.length }}
        </app-card-list-item>
        <app-card-list-item title="Keys">
          {{ typedKeysCount }}
        </app-card-list-item>
        <app-card-list-item title="Keys/Min">
          {{ typedSpeed }}
        </app-card-list-item>
        <app-card-list-item title="Stopwatch">
          {{ elapsedTime | time }}
        </app-card-list-item>
      </app-card-list>
    </app-container>

    <app-container>
      <app-button-group>
        <app-button color="red" @click="stop">Reset</app-button>
        <app-button color="green" @click="start" v-show="!isRunning">Start</app-button>
        <app-button color="yellow" @click="pause" v-show="isRunning">Pause</app-button>
      </app-button-group>
    </app-container>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppCardList from './components/AppCardList.vue'
import AppCardListItem from './components/AppCardListItem.vue'
import AppWordList from './components/AppWordList.vue'
import AppContainer from './components/AppContainer.vue'
import AppButtonGroup from './components/AppButtonGroup.vue'
import AppButton from './components/AppButton.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',

  components: {
    AppHeader,
    AppCardList,
    AppCardListItem,
    AppWordList,
    AppContainer,
    AppButtonGroup,
    AppButton
  },

  computed: {
    ...mapState([
      'categories',
      'currentCategoryIndex',
      'currentWordIndex',
      'typedWord',
      'isRunning',
      'elapsedTime',
      'typedKeysCount'
    ]),

    ...mapGetters([
      'currentCategoryWords',
      'isCorrectWord',
      'isIncorrectWord',
      'typedWordsCount',
      'typedSpeed'
    ])
  },

  methods: {
    ...mapActions([
      'selectCategory',
      'submitWord',
      'stop',
      'start',
      'pause'
    ]),
    updateTypedWord (e) {
      this.$store.commit('updateTypedWord', e.target.value)
    }
  },

  watch: {
    typedWord () {
      if (!this.isRunning && this.typedWord.length > 0) {
        this.start()
      }
    }
  },

  filters: {
    time (value) {
      let delta = value
      let hours = Math.floor(delta / 3600).toString().padStart(2, 0)
      delta %= 3600
      let minutes = Math.floor(delta / 60).toString().padStart(2, 0)
      let seconds = (delta % 60).toString().padStart(2, 0)

      return `${hours}:${minutes}:${seconds}`
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background: radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26);
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: #fff;
}

.app__word-input {
  margin: 0.5rem;
  padding: 0.5em;
  font-size: 2em;
  text-align: center;
  background: #333a4f;
  color: #fff;
  border: 0;
  border-bottom: 5px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  width: 29rem;
  transition: border 0.5s;
}

.app__word-input::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.app__word-input--matched {
  border-color: #6ab04c;
}

.app__word-input--error {
  border-color: #b04c4c;
}
</style>
