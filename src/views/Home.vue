<template>
  <div class="home">
    <TemplateEditor />
    <TextEditor />
    <Preview />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TemplateEditor from '@/components/TemplateEditor/TemplateEditor.vue';
import TextEditor from '@/components/TextEditor.vue';
import Preview from '@/components/Preview.vue';
import store from '@/store';

export default Vue.extend({
  name: 'home',
  mounted(){
    // TODO: show loader
    store.commit('loadToolbox');
  },
  components: {
    TemplateEditor,
    TextEditor,
    Preview
  },
});
</script>

<style scoped lang="scss">
    .home {
        display: flex;
        flex-direction: row;
    }
</style>