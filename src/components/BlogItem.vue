<template>
    <section class="max-w-[794px] mx-auto">
        <div class="flex gap-7">
            <p class="text-[#000] text-[20px] font-nunito font-normal">Posted on {{ blog.date }} Business</p>
            <img src="/img/Line.png" alt="" class="max-w-[407px] h-[3px] mt-3">
        </div>
        <div class="mt-[32px] mb-[65px]">
            <p class="text-[#7C7C7C] text-[30px] font-syne font-medium max-w-[554px] cursor-pointer hover:text-[#030211] delay-[100ms] transition-all">
                {{ blog.title }}
            </p>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    blog: {
        type: Object,
        required: true,
        default: () => {}
    }
})
</script>
