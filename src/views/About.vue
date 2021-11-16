<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h5>Txt1:{{txt1}}</h5><h5>Txt2:{{txt2}}</h5>
    <Child v-model:txt1="txt1"  v-model:txt2="txt2"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Child from '../components/Child.vue'
@Options({
    components: {
        Child
    },
    data () {
        return {
            txt1: '',
            txt2: ''
        }
    }
})
export default class About extends Vue {
}
</script>
