import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        msg: String
    }
})

export default class HelloWorld extends Vue {
    public msg!: string
    // Declared as component data
    count = 0
    count2 = 0

    counted (): void {
        this.count2 += 1
    }
}
