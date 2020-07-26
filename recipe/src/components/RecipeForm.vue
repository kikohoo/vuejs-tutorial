<template>
  <div id="recipe-form">
    <form>
      <div>
        <label for="title">标题</label>
        <input
          id="title"
          type="text"
          v-model="recipe.title"
        >
      </div>
      <div>
        步骤
        <textarea
          id="content"
          v-model="recipe.content"
        ></textarea>
      </div>
    </form>
    <button @click="handleSave">保存</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RecipeForm',
  props: {
    isEdit: Boolean
  },
  computed: {
    ...mapGetters({
      recipeList: 'getRecipes'
    })
  },
  data () {
    return {
      recipe: {
        id: null,
        title: '',
        content: ''
      }
    }
  },
  methods: {
    handleSave () {
      if (this.isEdit) {
        // edit 
        this.$store.dispatch('editRecipeAsync', this.recipe)
      } else {
        // new
        this.$store.dispatch('addRecipeAsync', this.recipe)
      }
      this.$router.push({ name: 'home' })
    }
  },
  mounted () {
    if (this.isEdit) {
      this.recipe = this.recipeList[this.recipeList.map(recipe => recipe.id).indexOf(parseInt(this.$route.params.id))]
    }
  }
}
</script>

<style scoped>
#recipe-form {
  padding: 30px;
}
input[type='text'] {
  width: 70%;
  height: 26px;
  margin-bottom: 20px;
}
textarea {
  width: 70%;
  height: 300px;
}
button {
  margin: 16px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>