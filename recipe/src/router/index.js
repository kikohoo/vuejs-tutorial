import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeList from '@/view/RecipeList'
import RecipeDetail from '@/view/RecipeDetail'
import AddRecipe from '@/view/AddRecipe'
import EditRecipe from '@/view/EditRecipe'

Vue.use(VueRouter)
const routes = [
  { name: 'home', path: '/', component: RecipeList },
  { name: 'detail', path: '/detail/:id', component: RecipeDetail },
  { name: 'add', path: '/add', component: AddRecipe },
  { name: 'edit', path: '/edit/:id', component: EditRecipe }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
