<template>
    <div class="template-editor">
        <select size="20">
            <option v-for="element in elements" :key="element">{{element}}</option>
        </select> 

    </div>
</template>

<script>
    export default {
        name: 'TemplateEditor',
        data(){
            return {
                elements: ['volvo', 'saab', 'mercedes']
            };
        }
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