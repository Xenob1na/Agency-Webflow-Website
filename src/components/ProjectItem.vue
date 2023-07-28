<template>
    <div>
        <router-link to="">
            <div class="w-[406px] h-[636.20px] left-0  flex-col justify-start items-start gap-6 inline-flex cursor-pointer">
                <div class="w-[406px] h-[549.20px] ">
                    <div class="w-[406px] h-[549.20px] left-0 top-0">
                        <img :src="project.img" alt="">
                    </div>
                </div>
                <div class="h-[63px] flex-col justify-start items-start gap-0.5 flex">
                    <div class="text-white text-3xl font-medium">{{ project.title }}</div>
                    <div class="text-white text-lg font-normal">{{ project.slug }}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true,
        default: () => { }
    }
})
</script>
