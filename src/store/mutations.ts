/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
    addTask (state: any, newTodo: string):void {
        if (newTodo.length) {
            state.toDos.push({
                title: newTodo,
                selected: false
            })
            state.newToDo = newTodo
        }
    },
    deleteToDo (state:any, item:any):void {
        const index = state.toDos.indexOf(item)
        state.toDos.splice(index, 1)
    }
}
