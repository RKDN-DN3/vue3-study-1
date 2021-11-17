<template>
    <div>
        <h2>{{ title }}</h2>
        <input v-model="txt1" ref="inputTxt1" autocomplete="off" type="text" class="input-focus" placeholder="Text"/>
        <button @click="addItem(txt1)">Add item</button>
        <button @click="addItemRefs($refs.inputTxt1)">Add item by refs</button>
        <h5>show by data: {{ str }}</h5>
        <h5>show in template: {{ txt1 }}</h5>
        <h5 v-for="(it) in lstStr" :key="it">
            {{ it }}
        </h5>
        <input type="checkbox" id="nam1" value="nam1" v-model="checkedNames">
        <label for="nam1">nam1</label>
        <input type="checkbox" id="nam2" value="nam2" v-model="checkedNames">
        <label for="nam2">nam2</label>
        <input type="checkbox" id="nam3" value="nam3" v-model="checkedNames">
        <label for="nam3">nam3</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        <h5 v-for="(checkName) in checkedNames" :key="checkName">
            {{ checkName }}
        </h5>
    </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        title: String,
        lst: []
    },
    data () {
        return {
            txt1: null,
            txt2: null,
            str: 'nam'
        }
    },
    datas: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    },
    methods: {
        addItem (s: string): void {
            if (s === undefined || s === null) {
                s = ''
            }
            this.str += ' ' + s
            this.lstStr.push(s)
            s = ''
            this.txt1 = null
            this.$refs.inputTxt1.focus()
        },
        addItemRefs (obj: any): void {
            let s = ''
            if (obj.value !== '') {
                s = obj.value
                this.str += ' ' + s
                this.lstStr.push(s)
                s = ''
            }
            this.txt1 = null
            obj.focus()
        }
    }
})

export default class FormInput extends Vue {
    lstStr: string[] = []
    checkedNames = []
}
</script>
<style>

</style>
