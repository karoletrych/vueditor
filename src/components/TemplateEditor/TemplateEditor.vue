<template>
    <div class="template-editor">
        <ul class="toolbox">
            <li 
                v-for="elementName in toolboxElements"
                @click="onElementClicked(elementName)"
                :key="elementName">
                {{elementName}}
            </li>
        </ul> 
        
        <!-- 
            <draggable
                class="dragArea list-group"
                :list="list1"
                :group="{ name: 'people', pull: 'clone', put: false }"
                :clone="cloneDog"
                @change="log">
            
            <div class="list-group-item" v-for="element in list1" :key="element.id">
                {{ element.name }}
            </div> 
        </draggable> 
        -->

        <div class="workspace">
            <Element 
                v-for="elementInstance in elementInstances"
                :key="elementInstance.id"
                :element-instance-id="elementInstance.id"
                >
            </Element>
        </div>
    </div>
</template>

<script>
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
            },
            elementInstances(){
                return this.$store.getters.elementInstances;
            }
        },
        methods: {
            onElementClicked(elementName){
                this.$store.commit('createElementInstance', {name: elementName} );
            }
        },
        data(){
            return {
            };
        },
        directives: {},
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
    .workspace {
        display: flex;
        flex-direction: column;
    }
</style>