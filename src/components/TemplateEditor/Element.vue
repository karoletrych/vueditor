<template>
    <div class="element">
        <ul v-sortable="defaultOptions">
            <li v-for="element in elements" :key="element">{{element}}</li>
        </ul> 
    </div>
</template>

<script>
    import sortableDirective from "./draggable.ts";
    export default {
        name: 'Element',
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
        directives: {sortableDirective}
    };
</script>

<style lang="scss" scoped>
    .element {
        border: 1px solid red;
        max-width: 33%;
        display: inline-block;
    }
</style>