import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let id = 0
function increment() {
  return ++id
}
const recipes = [
  {
    id: increment(),
    title: '宫保鸡丁',
    content: '宫保鸡丁的作法是首先...，然后...，最后...',
  },
  {
    id: increment(),
    title: '番茄炒鸡蛋',
    content: '番茄炒鸡蛋的作法是首先...，然后...，最后...',
  },
  {
    id: increment(),
    title: '佛跳墙',
    content: '佛跳墙的作法是首先...，然后...，最后...',
  },
  {
    id: increment(),
    title: '烤全羊',
    content: '烤全羊的作法是首先...，然后...，最后...',
  },
]

const store = new Vuex.Store({
  state: {
    recipes: recipes,
  },
  getters: {
    getRecipes(state) {
      return state.recipes
    },
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push({
        id: increment(),
        title: recipe.title,
        content: recipe.content,
      })
    },
    editRecipe(state, recipe) {
      const pos = state.recipes
        .map((recipe) => {
          return recipe.id
        })
        .indexOf(recipe.id)
      state.recipes.splice(pos, 1, recipe)
    },
    removeRecipe(state, recipe) {
      state.recipes.splice(state.recipes.indexOf(recipe), 1)
    },
  },
  actions: {
    addRecipeAsync({ commit }, recipe) {
      commit('addRecipe', recipe)
    },
    editRecipeAsync({ commit }, recipe) {
      commit('editRecipe', recipe)
    },
    removeRecipeAsync({ commit }, recipe) {
      commit('removeRecipe', recipe)
    },
  },
})

export default store
