/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
    Select: (state:any) => {
        return state.toDos.filter((m:any) => m.selected === true)
    },
    allTasks: (state:any) => {
        return state.toDos.length
    }
}
