<template>
    <div class="template-editor">

        <ul v-sortable="defaultOptions" class="toolbox">
            <li v-for="element in toolboxElements" :key="element">{{element}}</li>
        </ul> 
        <div class="workspace">
            <Element/>
        </div>
    </div>
</template>

<script>
    import sortableDirective from './draggable.ts';
    import Element from './Element';
    export default {
        name: 'TemplateEditor',
        computed: {
            toolboxElements(){
                return this.$store.state.toolbox.map(c=>c.Name);
            }
        },
        data(){
            return {
                defaultOptions: {
                    draggable: 'li',
                    mirror: {
                        constrainDimensions: true,
                    }
                }
            };
        },
        directives: {sortableDirective},
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