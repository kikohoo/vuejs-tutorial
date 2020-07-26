<template>
  <div class="recipe-item">
    <div
      class="title"
      @click="handleView(recipe)"
    >{{ recipe.title }}</div>
    <div class="operation">
      <button
        class="edit"
        @click="handleEdit(recipe)"
      >编辑</button>
      <button
        class="delete"
        @click="handleDelete(recipe)"
      >删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeItem',
  props: {
    recipe: null
  },
  methods: {
    handleView (recipe) {
      this.$router.push({ name: 'detail', params: { id: recipe.id } })
    },
    handleEdit (recipe) {
      this.$router.push({ name: 'edit', params: { id: recipe.id } })
    },
    handleDelete (recipe) {
      this.$store.dispatch('removeRecipeAsync', recipe)
    }
  }
}
</script>

<style scoped>
div.recipe-item {
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px;
  border-radius: 5px;
  background-color: #34b388;
  justify-content: center;
}
div.title {
  flex-grow: 3;
  line-height: 26px;
}
div.operation {
  flex-grow: 1;
}
button.edit {
  background-color: yellow;
  margin-right: 20px;
  padding: 5px;
  border: 1px;
  border-radius: 5px;
}
button.delete {
  background-color: red;
  padding: 5px;
  border: 1px;
  border-radius: 5px;
}
</style>