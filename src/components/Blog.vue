<template>
    <section class="max-w-[1200px] mx-auto mt-[144px]">
        <div class="mb-[136px]">
            <h3 class="text-[40px] text-[#030211] font-syne font-bold">Latest News & <span
                    class="text-white bg-[#030211] px-2">Blogs</span></h3>
        </div>
        <BlogItem v-for="(blog, index) in blogList.slice(0, 3)" :blog="blog" :key="blog.id" />
        <div class="mx-auto max-w-[200px] mt-[90px] mb-[110px]">
            <button
                class="flex gap-[6px] items-center text-[#030211] text-[18px] font-nunito font-bold hover:ml-2 delay-[100ms] transition-all">
                <span class="hover:pr-2 delay-[100ms] transition-all">See All News</span>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.894 8.49356C18.0528 8.65394 18.1419 8.87054 18.1419 9.09627C18.1419 9.322 18.0528 9.53861 17.894 9.69898L10.2808 17.3122C10.1184 17.4674 9.90269 17.5544 9.67806 17.5554C9.5658 17.5549 9.45462 17.5334 9.35028 17.4919C9.19632 17.4272 9.06496 17.3184 8.97276 17.1791C8.88056 17.0399 8.83163 16.8765 8.83215 16.7095V9.94218H1.21896C0.994608 9.94218 0.779447 9.85306 0.620808 9.69442C0.462169 9.53578 0.373047 9.32062 0.373047 9.09627C0.373047 8.87192 0.462169 8.65676 0.620808 8.49813C0.779447 8.33949 0.994608 8.25036 1.21896 8.25036H8.83215V1.48308C8.83163 1.31607 8.88056 1.15265 8.97276 1.01341C9.06496 0.874161 9.19632 0.765324 9.35028 0.70061C9.50652 0.639666 9.67683 0.624206 9.8415 0.656017C10.0062 0.687828 10.1585 0.76561 10.2808 0.880366L17.894 8.49356Z"
                        fill="#030211" />
                </svg>
            </button>
        </div>
        <hr>
    </section>
</template>

<script setup>
import { useBlogStore } from '../stores/useBlogStore'
import { storeToRefs } from 'pinia';
import BlogItem from './BlogItem.vue';

const store = useBlogStore()
const { blogList } = storeToRefs(store)
</script>
