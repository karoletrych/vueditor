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
    elementInstances: ElementDto[];
}

interface State {
    toolbox: Component[];
    workspace: Workspace;
}


export default new Vuex.Store<State>({
    state: {
        toolbox: [],
        workspace: {
            elementInstances: []
        }
    },
    getters: {
        toolboxElementLabels: state => {
            return state.toolbox.map(e => e.name);
        },
        elementInstances: state => {
            return state.workspace.elementInstances;
        },
        elementInstance: state =>
            (elementInstanceId: string) => {
                // TODO: add lookup or lookup getter?
                return state.workspace.elementInstances.find(ei => ei.id === elementInstanceId);
            }
    },
    mutations: {
        loadToolbox(state){
            const toolbox = scanComponents(KeenUI);
            state.toolbox = toolbox;
        },
        createElementInstance(state, element: Element){
            const elementDto = {...element, id: v4() };
            state.workspace.elementInstances.push(elementDto);
        }
    },
    actions: {
    },
});
