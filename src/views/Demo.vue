<template>
    <div>
        <h1>Page Demo</h1>
        <FormInput />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import FormInput from '../components/FormInput.vue'
@Options({
    components: {
        FormInput
    }
})

export default class DemoPage extends Vue {
}

</script>
