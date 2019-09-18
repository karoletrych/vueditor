<template>
    <div class="text-editor">
        <textarea class="text-area" rows="30" v-model="sourceCode">
        </textarea>
    </div>
</template>

<script>
    import source from './testSource.js';
    export default {
        name: "TemplateEditor",
        data() {
            return {
                sourceCode: source
            }
        }
    }
</script>

<style lang="scss" scoped>
    .text-editor {
        border: 1px solid red;
        max-width: 50%;
        flex-grow: 1;
    }
    .text-area {
        min-width: 100%;
    }
</style>