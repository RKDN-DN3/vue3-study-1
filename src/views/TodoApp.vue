<template>
    <div>
        <h5>{{ allTasks }} text </h5>
        <InputTodo  :AddProp="newTodo=>{Add(newTodo)}"  :newTodoProp="newToDo"  :allTasks="allTasks" />
        <ListTodo   :Delete="item=>{Delete(item)}"      :toDos="toDos"          :getSelect="getSelect" />
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import ListTodo from '../components/ListTodo.vue'
import InputTodo from '../components/InputTodo.vue'

const LOCAL_STORAGE_KEY = 'todo-app'

@Options({
    components: {
        ListTodo,
        InputTodo
    },
    data () {
        return {
            toDos: this.$store.state.toDos,
            newToDo: this.$store.state.newToDo
        }
    },
    methods: {
        Add (str) {
            this.$store.dispatch('addTask', str)
        },
        Delete (item) {
            this.$store.dispatch('deleteToDo', item)
        }
    },
    computed: {
        allTasks () {
            return this.$store.getters.allTasks
        },
        getSelect () {
            return this.$store.getters.Select
        }
    },
    watch: {
        toDos: {
            deep: true,
            handler (newValue) {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue))
            }
        }
    }
})

export default class TodoApp extends Vue {
}
</script>

<style lang="scss">
table, th, td {
    border: 1px solid black;
}
th text{
    font-weight: bold;
}
.selected {
    font-size: 20px;
}
</style>
