<template>
    <div>
        <h2>{{ title }}</h2>
        <div class="overflow-auto">
            <!-- <v-pagination
                v-model="currentPage"
                :pages="10"
                :range-size="1"
                active-color="#DCEDFF"
                @update:modelValue="updateHandler"
            /> -->

            <p class="mt-3">Current Page: {{ currentPage }}</p>

            <b-table
            id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            small
            ></b-table>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import VPagination from 'node_modules/vue3-pagination/src/components/VPagination.vue'
import BPagination from 'bootstrap-vue'
// import 'vue3-pagination/dist/vue3-pagination.css'

@Options({
    props: {
        title: String,
        lst: []
    },
    components: {
        // VPagination
    },
    data () {
        return {
            perPage: 3,
            currentPage: 1,
            items: [
                { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
            ]
        }
    },
    computed: {
        rows () {
            return this.items.length
        }
    },
    methods: {
        addItem (s: string): void {
            if (s === undefined || s === null) {
                s = ''
            }
            this.str += ' ' + s
            this.lstStr.push(s)
            s = ''
            this.txt1 = null
            // this.$refs.inputTxt1.value = null
            this.$refs.inputTxt1.focus()
        },
        addItemRefs (obj: any): void {
            let s = ''
            if (obj.value !== '') {
                s = obj.value
                this.str += ' ' + s
                this.lstStr.push(s)
                s = ''
            }
            this.txt1 = null
            obj.focus()
        }
    }
})

export default class FormInput extends Vue {
}
</script>
<style>

</style>
