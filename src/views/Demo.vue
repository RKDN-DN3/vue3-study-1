<template>
    <div class="row">
        <div class="col-sm-4">
            <h1>Page Demo</h1>
            <FormInput title="Form Input"/>
        </div>
        <div class="col-sm-8">
            <h1>Page Demo</h1>
            <Pagination title="Paginate" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import FormInput from '../components/FormInput.vue'
import Pagination from '../components/TablePagination.vue'

@Options({
    components: {
        FormInput,
        Pagination
    },
    data () {
        return {
        }
    }
})

export default class DemoPage extends Vue {
}

</script>

<style lang="scss">
// // Then import Bootstrap an BootstrapVue SCSS files (order is important)
// @import 'node_modules/bootstrap/scss/bootstrap.scss';
// Webpack example
@import '~bootstrap';
//@import '~bootstrap-vue';
</style>
