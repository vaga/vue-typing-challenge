import * as MutationTypes from './mutationTypes.js'

import categories from '../assets/categories.json'

export const state = {
  categories,
  currentCategoryIndex: 0,
  currentWordIndex: 0,
  typedWord: '',
  typedKeysCount: 0,
  isRunning: false,
  timerToken: null,
  elapsedTime: 0
}

export const mutations = {
  [MutationTypes.SELECT_CATEGORY] (state, categoryIndex) {
    state.currentCategoryIndex = categoryIndex
  },

  [MutationTypes.START] (state, timerToken) {
    state.isRunning = true
    state.timerToken = timerToken
  },

  [MutationTypes.PAUSE] (state) {
    clearInterval(state.timerToken)
    state.isRunning = false
    state.timerToken = null
  },

  [MutationTypes.RESET] (state) {
    state.currentWordIndex = 0
    state.elapsedTime = 0
    state.typedWord = ''
    state.typedKeysCount = 0
  },

  [MutationTypes.TICK] (state) {
    state.elapsedTime = state.elapsedTime + 1
  },

  [MutationTypes.UPDATE_TYPED_WORD] (state, typedWord) {
    state.typedWord = typedWord
  },

  [MutationTypes.NEXT_WORD] (state) {
    state.currentWordIndex = state.currentWordIndex + 1
    state.typedKeysCount = state.typedKeysCount + state.typedWord.length
    state.typedWord = ''
  }
}
