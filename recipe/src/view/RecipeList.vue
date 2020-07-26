<template>
  <div id="recipe-list">
    <h2>食谱列表</h2>
    <button
      class="add"
      @click="handleAdd"
    >添加</button>
    <div
      v-for="recipe in recipeList"
      :key="recipe.id"
    >
      <recipe-item
        :recipe='recipe'    
      ></recipe-item>
    </div>
  </div>
</template>

<script>
import RecipeItem from '@/components/RecipeItem'
import { mapGetters } from 'vuex'
export default {
  name: 'RecipeList',
  computed: {
    ...mapGetters({
      recipeList: 'getRecipes'
    })
  },
  methods: {
    handleAdd () {
        this.$router.push({name: 'add'})
    },
  },
  components: { RecipeItem }
}
</script>

<style scoped>
button.add {
  background-color: #34b388;
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>