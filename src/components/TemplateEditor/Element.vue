<template>
    <div class="element" >
        <div class="header">
            {{name}}
        </div>
        <ul>
            <li v-for="element in elements" :key="element">{{element}}</li>
        </ul> 
        <div class="content">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Element',
        data(){
            return {
                name: "ui-alert",
                elements: ['volvo', 'saab', 'mercedes'],
                defaultOptions: {
                    draggable: 'li',
                    mirror: {
                        constrainDimensions: true,
                    }
                }
            };
        },
        directives: {}
    };
</script>

<style lang="scss" scoped>
    .element {
        border: 1px solid red;
        display: inline-block;
    }
    .content {
        border: 1px solid blue;
        min-width: 100px;
        min-height: 20px;
    }
</style>