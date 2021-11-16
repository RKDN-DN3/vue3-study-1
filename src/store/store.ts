import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actionTodo'
import getter from './getter'

const LOCAL_STORAGE_KEY = 'todo-app'

const store = createStore({
    state: {
        toDos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'),
        newToDo: null
    },
    actions: actions,
    mutations: mutations,
    modules: {},
    getters: getter
})

export default store
