<template>
    <div>
        <h2>{{ title }}</h2>
        <div class="overflow-auto">
            <p class="mt-3">Current Page: {{ currentPage }}</p>
            <p class="mt-3">Rows: {{ rows }}</p>
        </div>
        <N3Table :columnsProp="columns" :rowsProp="itemsCurrent"/>
        <Pagin v-model:CurrentPage="currentPage" :MaxPage="maxPage"/>
    </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Options, Vue } from 'vue-class-component'
import N3Table from './Table.vue'
import Pagin from './Pagination.vue'

@Options({
    props: {
        title: String,
        lst: []
    },
    components: {
        N3Table,
        Pagin
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
                { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
                { id: 10, first_name: 'Pearl1', last_name: 'Slaghoople1' }
            ],
            columns: [
                {
                    field: 'id',
                    value: 'Id'
                },
                {
                    field: 'first_name',
                    value: 'First Name'
                },
                {
                    field: 'last_name',
                    value: 'Last Name'
                }
            ]
        }
    },
    computed: {
        rows () {
            return this.items.length
        },
        itemsCurrent () {
            return this.items.slice((this.currentPage - 1) * this.perPage, (this.currentPage) * this.perPage)
        },
        maxPage () {
            return Math.ceil(this.items.length / this.perPage)
        }
    },
    methods: {
    },
    watch: {
        currentPage: {
            deep: true,
            handler (newValue) {
                // this.itemsCurrent = this.items.slice(this.perPage * newValue - 1, this.perPage)
                // this.itemsCurrent = this.items.slice((newValue - 1) * this.perPage, (newValue) * this.perPage)
            }
        }
    }
})

export default class FormInput extends Vue {
}
</script>
<style>

</style>
