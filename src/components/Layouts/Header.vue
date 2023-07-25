<template>
    <div class="max-w-[1200px] mx-auto ">
        <header class="mt-[50px] items-center flex justify-between">
            <div>
                <router-link to="/"><img src="/img/Logo.svg" alt="Logo"></router-link>
            </div>
            <Transition>
                <nav class="ml-[500px]" v-if="IsNav">
                    <ul class="flex gap-10">
                        <li v-for="(navs, index) in nav" key="index">
                            <router-link :to="navs.path" class="text-[18px] text-[#030211] font-nunito font-medium leading-normal">{{ navs.name }}</router-link>
                        </li>
                    </ul>
                </nav>
            </Transition>
            <div class="relative z-10 border-2 w-[58px] rounded-[100%] h-[57px] py-[9px] px-[14.6px] cursor-pointer" @click="OpenBurger">
                <button class="relative h-4 w-[25px]" v-if="!IsNav">
                    <span class="absolute left-0 translate-y-0 transition-transform top-0 h-[2px] w-full bg-[#030211]"></span>
                    <span class="absolute left-0 top-1/2 h-[2px] transition-opacity w-full bg-[#030211]"></span>
                    <span class="absolute left-0 bottom-0 h-[2px]  transition-transform w-full bg-[#030211]"></span>
                </button>
                <button class="relative h-4 w-[25px]" v-else>
                    <span class="absolute left-[12px] translate-y-0 transition-transform top-0 h-[2px] w-[12px] bg-[#030211]"></span>
                    <span class="absolute left-0 top-1/2 h-[2px] transition-opacity w-full bg-[#030211]"></span>
                    <span class="absolute left-0 bottom-0 h-[2px]  transition-transform w-[12px] bg-[#030211]"></span>
                </button>
            </div>
        </header>
        <hr class="mt-[45px] border-[1px]">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const IsNav = ref(false)
const nav = ref([
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/About'
    },
    {
        name: 'Work',
        path: '/Work'
    },
    {
        name: 'News',
        path: '/News'
    },
    {
        name: 'Contact',
        path: '/Contact'
    },
])

function OpenBurger() {
    IsNav.value = !IsNav.value
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
