import * as MutationTypes from './mutationTypes.js'

export const start = ({ commit }) => {
  const timerToken = setInterval(() => {
    commit(MutationTypes.TICK)
  }, 1000)

  commit(MutationTypes.START, timerToken)
}

export const pause = ({ commit }) => {
  commit(MutationTypes.PAUSE)
}

export const stop = ({ commit }) => {
  commit(MutationTypes.PAUSE)
  commit(MutationTypes.RESET)
}

export const selectCategory = ({ commit }, categoryIndex) => {
  commit(MutationTypes.PAUSE)
  commit(MutationTypes.RESET)
  commit(MutationTypes.SELECT_CATEGORY, categoryIndex)
}

export const submitWord = ({ state, getters, commit }) => {
  if (getters.isCorrectWord) {
    commit(MutationTypes.NEXT_WORD)
  }

  if (state.currentWordIndex === getters.currentCategoryWords.length) {
    commit(MutationTypes.PAUSE)
  }
}
