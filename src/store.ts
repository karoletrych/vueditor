import Vue from 'vue';
import Vuex from 'vuex';
import {Component} from '@/core/scanComponents.types';
import {scanComponents} from '@/core/scanComponents';
import KeenUI from 'keen-ui';
import {v4} from 'uuid';
import {Element} from '@/core/htmlAst';

Vue.use(Vuex);

type ElementDto = Element & {id: string};

interface Workspace {
    elements: ElementDto[];
}

interface State {
    toolbox: Component[];
    workspace: Workspace;
}


export default new Vuex.Store<State>({
    state: {
        toolbox: [],
        workspace: {
            elements: []
        }
    },
    getters: {
        toolboxElementLabels: state => {
            return state.toolbox.map(e => e.Name);
        }
    },
    mutations: {
        loadToolbox(state){
            const toolbox = scanComponents(KeenUI);
            state.toolbox = toolbox;
        },
        addElementToWorkspace(state, element: Element){
            const elementDto = {...element, id: v4() };
            state.workspace.elements.push(elementDto);
        }
    },
    actions: {
    },
});
