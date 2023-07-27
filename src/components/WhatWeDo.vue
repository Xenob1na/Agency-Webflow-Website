<template>
    <section class="max-w-[1200px] mx-auto mt-[150px] flex justify-between">
        <div>
            <h2 class="text-[40px] text-[#030211] font-syne font-bold">What  <span class="bg-[#030211] text-white px-2">we do</span></h2>
        </div>
        <div>
            <p class="text-[23px] text-[#000] font-nunito font-normal  max-w-[561px] mb-6"> High-end digital experiences.
                Created at the heart of Manhattan,
                <span class="underline decoration-wavy decoration-[#5F46FF] decoration-2">we are a should human</span> team.
            </p>
            <p class="text-[23px] text-[#000] font-nunito font-normal  max-w-[561px] mb-[33px]">
                The driving force of all speeches, 
                we believe that creation should be
                the point around which any strategy 
                revolves.
            </p>
            <UiBtn btn="See Our Process"/>
        </div>
    </section>
</template>

<script setup>
import UiBtn from './UI/UiBtn.vue';
</script>