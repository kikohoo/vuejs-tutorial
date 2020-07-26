<template>
  <div id='recipe-edit'>
    <recipe-form :isEdit='true'></recipe-form>
  </div>
</template>

<script>
import RecipeForm from '@/components/RecipeForm'
export default {
  name: 'EditRecipe',
  components: {
    RecipeForm
  }
}
</script>

<style>
</style>