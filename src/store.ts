import Vue from 'vue';
import Vuex from 'vuex';
import {Component} from '@/core/scanComponents.types';
import {scanComponents} from '@/core/scanComponents';
import KeenUI from 'keen-ui';

Vue.use(Vuex);

interface State {
  toolbox: Component[];
}

export default new Vuex.Store<State>({
  state: {
    toolbox: []
  },
  mutations: {
    loadToolbox(state){
      const toolbox = scanComponents(KeenUI);
      state.toolbox = toolbox;
    }
  },
  actions: {
  },
});
