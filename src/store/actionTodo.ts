/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
    addTask ({ commit }:{commit:any}, newTodo:string):void {
        commit('addTask', newTodo)
    },
    deleteToDo ({ commit }:{commit:any}, item:any):void {
        commit('deleteToDo', item)
    }
}
