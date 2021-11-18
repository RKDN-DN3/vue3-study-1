<template>
    <div>
        <h1>Get data API VietNam provinces </h1>
        <input v-model="strSearch"/>
        <button @click="callAPI(strSearch)">123</button>
        <h5 v-for="(item, index ) in infor" :key="index" >{{ item.name }}</h5>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'
@Options({
    data () {
        return {
            infor: [],
            strSearch: ''
        }
    },
    methods: {
        callAPI (str: string) {
            const url = `https://provinces.open-api.vn/api/p/search/?q=${str}`
            // return axios.get(url).then(response => response.data)
            axios.get(url)
                .then(response => {
                    this.infor = response.data
                    this.strSearch = ''
                })
                .catch(err => {
                    this.infor = err
                })
        },
        async callAPI2 (str: string) {
            const url = `https://provinces.open-api.vn/api/p/search/?q=${str}`
            const response = await axios.get(url)
            this.strSearch = ''
            this.infor = response.data
        }
    }
})

export default class ApiVnProvinces extends Vue {
}
</script>
