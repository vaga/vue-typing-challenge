<template>
  <app-container>
    <app-button-group>
      <app-button
        v-for="(wordCategory, index) in wordCategories"
        :key="index"
        :color="index === wordCategorySelectedIndex ? 'green' : ''"
        @click="selectNewCategory(index)"
      >{{ wordCategory.name }}</app-button>
    </app-button-group>
  </app-container>
</template>

<script>
import AppContainer from './AppContainer.vue'
import AppButtonGroup from './AppButtonGroup.vue'
import AppButton from './AppButton.vue'

export default {
  name: 'app-category-selector',

  components: {
    AppContainer,
    AppButtonGroup,
    AppButton
  }
}
</script>


