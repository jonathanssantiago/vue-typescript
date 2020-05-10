import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings';
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
  key: 'vuex-typescript',
  storage: window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settings
  },
  plugins: [vuexLocalStorage.plugin]
});
