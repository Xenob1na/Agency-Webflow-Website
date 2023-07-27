<template>
    <section class="max-w-[1200px] mx-auto mt-[146px]">
        <div>
            <h2 class="text-[20px] text-[#030211] font-syne font-bold tracking-[11.3px] text-center">WE PARTNER WITH FORWARD</h2>
        </div>
        <div class="flex justify-between items-center mt-[54px]">
            <div v-for="partners in partner">
                <img :src="partners.img" alt="WE PARTNER WITH">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const partner = ref([
    {
        img: '/img/svg10.svg'
    },
    {
        img: '/img/svg11.svg'
    },
    {
        img: '/img/svg12.svg'
    },
    {
        img: '/img/svg13.svg'
    },
    {
        img: '/img/svg14.svg'
    }
])
</script>
