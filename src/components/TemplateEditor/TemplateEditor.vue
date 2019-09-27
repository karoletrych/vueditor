<template>
    <div class="template-editor">
        <ul class="toolbox dropzone" v-droppable>
            <li 
                v-for="element in toolboxElements" 
                :key="element">
                {{element}}
            </li>
        </ul> 
        <div class="workspace dropzone" v-droppable>
            <Element/>
        </div>
    </div>
</template>

<script>
    import {draggableDirective, droppableDirective} from './draggable.ts';
    import Element from './Element';
    export default {
        name: 'TemplateEditor',
          beforeCreate(){
            // TODO: show loader
            this.$store.commit('loadToolbox');
        },
        computed: {
            toolboxElements(){
                return this.$store.getters.toolboxElementLabels;
            }
        },
        data(){
            return {
            };
        },
        directives: {droppableDirective},
        components: {Element}
    };
</script>

<style lang="scss" scoped>
    .template-editor {
        border: 1px solid red;
        max-width: 33%;
        flex-grow: 1;
        display: flex;
    }
    .toolbox {
        border: 1px solid red;
    }
</style>