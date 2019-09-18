<template>
  <div class="home">
    <TemplateEditor />
    <TextEditor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TemplateEditor from '@/components/TemplateEditor.vue';
import TextEditor from '@/components/TextEditor.vue';

export default Vue.extend({
  name: 'home',
  components: {
    TemplateEditor,
    TextEditor,
  },
});
</script>

<style scoped lang="scss">
    .home {
        display: flex;
        flex-direction: row;
    }
</style>