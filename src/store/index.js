import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    allProducts: [],
    inBag: [],
    currUrl: {},
    categories: []
  },
  
  mutations: {

    initialiseStore(state){
      if(localStorage.getItem('inBag')) {
					state.inBag = JSON.parse(localStorage.getItem('inBag'))
			}
    },

    loadProductsMutation(state, obj) {
      state.allProducts = obj.products;
      state.currUrl.baseUrl = obj.currUrl.baseUrl;
      state.currUrl.skip = obj.currUrl.skip;
      state.currUrl.category = obj.currUrl.category;
    },

    inBagMutation(state, inBag) {
      state.inBag = inBag;
    },

    loadCategoriesMutation(state, categories) {
      state.categories = categories.data;
    },

  },

  actions: {
    loadProductsAction({commit},currUrl) {
      var obj = {}
      axios
      .get(currUrl.baseUrl + currUrl.category + currUrl.limit + currUrl.skipCode + currUrl.skip)
      .then(function(response) {
        obj.products = response.data;
        obj.currUrl = currUrl;
        commit('loadProductsMutation', obj)
      })
    },

    inBagAction({commit}, inBag) {
      commit('inBagMutation', inBag);
    },

    loadCategoriesAction({commit}) {
      axios
      .get('https://dummyjson.com/products/categories')
      .then(function(response) {
        commit('loadCategoriesMutation', response)
      })
    },

  },

  modules: {
  }
})
