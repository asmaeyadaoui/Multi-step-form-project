import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id:'',
    nom:'',
    prenom:'',
    email:'',
    pays:'',
    ville:'',
    tel:'',
    date:'',

  },
  getters:{
    id: state => {
      return state.id;
  }
  },
  mutations: {
    setId (state, id) {
      state.id = id
  }
},
actions: {
  loadId ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/clients/lastId')
      .then(response => response.data)
      .then(id => {
      console.log(id);
      commit('setId', id)
      })
  },
 

},
  modules: {},
});


