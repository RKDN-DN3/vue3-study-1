<template>
    <div>
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                <a class="page-link" @click="movePage(1)">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">First</span>
                </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                <a class="page-link" @click="prevPage()">
                    <span aria-hidden="true">&lt;</span>
                    <span class="sr-only">Prev</span>
                </a>
            </li>
            <li
                class="page-item"
                v-for="n in pagination"
                :key="n"
                :class="{ disabled: currentPage === n || n === null }"
            >
                <a class="page-link" @click="movePage(n)">
                    {{ n===null? '...': n }}
                </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= maxPage }">
                <a class="page-link" @click="nextPage()">
                    <span aria-hidden="true">&gt;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= maxPage }">
                <a class="page-link" @click="movePage(maxPage)">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Last</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import * as helper from '../help/help'

@Options({
    components: {
    },
    data () {
        return {
            maxPage: this.MaxPage,
            currentPage: this.CurrentPage
        }
    },
    props: {
        CurrentPage: Number,
        MaxPage: Number
    },
    computed: {
        pagination () {
            return helper.formatViewPagination(1, this.maxPage, this.currentPage)
        }
    },
    methods: {
        movePage (page: number) {
            this.currentPage = page
        },
        prevPage () {
            this.currentPage = this.currentPage - 1
        },
        nextPage () {
            this.currentPage = this.currentPage + 1
        }
    },
    watch: {
        currentPage: {
            deep: true,
            handler (newValue) {
                this.$emit('update:CurrentPage', newValue)
            }
        }
    }
})
export default class Pagin extends Vue {
}
</script>

<style lang="scss">
a{
    cursor: pointer;
}
</style>
