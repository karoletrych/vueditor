<template>
    <div class="element-instance" >
        <div class="header">
            {{name}}
        </div>
        <ul>
            <li 
                v-for="prop in props" 
                :key="prop.name"
                >
                {{propInstance}}
            </li>
        </ul> 
        <div class="content">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Element',
        computed:{
            props(){
                return this.$store.getters.elementInstance(this.elementInstanceId).props;
            },
            name(){
                return this.$store.getters.elementInstance(this.elementInstanceId).name;
            }
        },
        props:{
            elementInstanceId:{type: String, required: true}
        },
        directives: {}
    };
</script>

<style lang="scss" scoped>
    .element-instance {
        border: 1px solid red;
        display: inline-block;
    }
    .content {
        border: 1px solid blue;
        min-width: 100px;
        min-height: 20px;
    }
</style>