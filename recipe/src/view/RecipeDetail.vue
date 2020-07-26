<template>
  <div id="recipe-detail">
    <h2>{{recipe.title}}</h2>
    <div>{{recipe.content}}</div>
    <button @click="$router.push({name: 'home'})">返回</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RecipeDetail',
  data () {
    return {
      recipe: {
        id: '',
        title: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      recipeList: 'getRecipes'
    })
  },
  mounted () {
    this.recipe = this.recipeList[this.recipeList.map(recipe => recipe.id).indexOf(parseInt(this.$route.params.id))]
  }
}
</script>
<style scoped>
button {
  margin: 16px;
  margin-top: 50px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>