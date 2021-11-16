<template>
    <div class="d-flex flex-row">
        <div class="p-2">
            <h5>All text</h5>
            <table class="table mt-3 listTodo">
                <tr>
                    <th>Select</th>
                    <th>Value</th>
                    <th>Delete</th>
                </tr>
                <p v-if="toDos.length <= 0">
                    Empty
                </p>
                <tr v-for="item in toDos"
                :key="item.id"
                :class="{selected: item.selected}">
                    <td>
                        <input
                            class="mark"
                            type="checkbox"
                            v-model="item.selected">
                        <span class="checkmark">
                        </span>
                    </td>
                    <td>{{ item.title }}</td>
                    <td width="20%">
                        <a @click="Delete(item)"
                            title="Delete"
                            class="delete badge-danger"
                            style="cursor: pointer;"
                        >
                            x
                        </a>
                    </td>
                </tr>
            </table>
        </div>
        <div class="p-2">
            <h5>Select text</h5>
            <table class="table mt-3 listTodo">
                <tr>
                    <th>Value</th>
                </tr>
                <p v-if="getSelect.length <= 0">Empty</p>
                <tr v-for="item in getSelect"
                :key="item.id">
                    <td>{{ item.title }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        toDos: Array,
        Delete: Function,
        getSelect: Array
    }
})

export default class ListTodo extends Vue {
}
</script>
