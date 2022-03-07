import Vue from 'vue';
import Vuex from 'vuex';
import personAbout from './person';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        personAbout,
    }
})

export default store;