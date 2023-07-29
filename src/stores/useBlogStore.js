import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogList', {
    state: () => ({
     blogList: [],
    }),
 })
