import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Vue.use(BootstrapVue)
createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
