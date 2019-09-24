<template>
    <div class="text-editor">
        <textarea class="text-area" rows="30" v-model="sourceCode">
        </textarea>
    </div>
</template>

<script>
    import source from './testSource.js';
    // const compiler = require('vue-template-compiler');
    export default {
        name: 'TextEditor',
        data() {
            return {
                sourceCode: source
            };
        },
        watch: {
            sourceCode(){
                // const ast = compiler.parseComponent(this.sourceCode);

            }
        }
    };
</script>

<style lang="scss" scoped>
    .text-editor {
        border: 1px solid red;
        max-width: 33%;
        flex-grow: 1;
    }
    .text-area {
        min-width: 100%;
    }
</style>