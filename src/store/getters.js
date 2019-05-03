export const currentCategoryWords = (state) => {
  return state.categories[state.currentCategoryIndex].words
}

export const currentWord = (state, getters) => {
  return state.currentWordIndex < getters.currentCategoryWords.length
    ? getters.currentCategoryWords[state.currentWordIndex]
    : ''
}

export const isCorrectWord = (state, getters) => {
  return state.typedWord.toLowerCase() === getters.currentWord
}

export const isIncorrectWord = (state, getters) => {
  return state.typedWord !== getters.currentWord.substr(0, state.typedWord.length)
}
export const typedWordsCount = (state) => {
  return state.currentWordIndex
}

export const typedSpeed = (state) => {
  return state.elapsedTime > 5
    ? Math.round(state.typedKeysCount * 60 / state.elapsedTime)
    : 0
}
