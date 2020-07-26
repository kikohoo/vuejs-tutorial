<template>
  <div id='recipe-add'>
    <recipe-form :isEdit='false'></recipe-form>
  </div>
</template>

<script>
import RecipeForm from '@/components/RecipeForm'
export default {
  data () {
    return {
      recipe: {
        id: this.$route.id,
        title: '',
        content: ''
      }
    }
  },
  components: {
    'recipe-form': RecipeForm
  }
}
</script>

<style>
</style>