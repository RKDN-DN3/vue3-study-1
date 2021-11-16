<template>
    <div>
        <h5>{{ allTasks }} text </h5>
         <div class="form-group">
            <div>
                <input class="form-control" autofocus
                    v-model="newTodo"
                    @keyup.enter="Add(newTodo)"
                    placeholder="Input todo and enter to add">
            </div>
            <div>
                <button @click="Add(newTodo)" class="btn btn-primary">
                    Add task
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        newTodoProp: String,
        AddProp: Function,
        allTasks: Number,
        namee: String
    },
    data () {
        return {
            // newTodo: String
            newTodo: this.newTodoProp
        }
    },
    methods: {
        Add (str: string): void {
            this.AddProp(str)
            this.newTodo = ''
        }
    }
})

export default class InputTodo extends Vue {
}
</script>
