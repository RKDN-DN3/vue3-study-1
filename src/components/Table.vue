<template>
    <div>
        <h2>ViewTable</h2>
        <div>
            <table class="table" style="margin:30px">
                <thead>
                    <th
                    v-for="(col, index) in columnsProp"
                    :key="index"
                    >
                        {{ col.value }}
                    </th>
                </thead>
                <tbody v-if="rows.length >0">
                    <tr v-for="(row, i) in rowsProp" :key="i">
                        <td v-for="(col,j) in columnsProp" :key="j" >
                            {{row[col.field]}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        columnsProp: {
            type: Array,
            default: () => {
                return []
            }
        },
        rowsProp: Array
    },
    data () {
        return {
            cols: Object.keys(this.rowsProp[0]),
            columns: [
                {
                    field: 'first',
                    value: 'First'
                },
                {
                    field: 'last',
                    value: 'Last'
                },
                {
                    field: 'handle',
                    value: 'Handle'
                }
            ],
            rows: [
                {
                    first: 'nguyen1',
                    last: 'nam1',
                    handle: 'handle1'
                },
                {
                    first: 'nguyen2',
                    last: 'nam2',
                    handle: 'handle2'
                },
                {
                    first: 'nguyen3',
                    last: 'nam3',
                    handle: 'handle3'
                }
            ]
        }
    }
})

export default class N3Table extends Vue {
}

</script>
