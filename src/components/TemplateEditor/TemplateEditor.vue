<template>
    <div class="template-editor">

        <ul v-sortable="defaultOptions">
            <li v-for="element in elements" :key="element">{{element}}</li>
        </ul> 
        <Element/>
    </div>
</template>

<script>
    import sortableDirective from "./draggable.ts";
    import Element from "./Element";
    export default {
        name: 'TemplateEditor',
        data(){
            return {
                elements: ['volvo', 'saab', 'mercedes'],
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
</style>