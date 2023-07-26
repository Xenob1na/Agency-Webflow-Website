<template>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper mt-[100px] cursor-grabbing"
    >
      <swiper-slide><img src="/img/f4.png" alt=""></swiper-slide>
      <swiper-slide><img src="/img/f5.png" alt=""></swiper-slide><swiper-slide><img src="/img/f6.png" alt=""></swiper-slide>
      <swiper-slide><img src="/img/f7.png" alt=""></swiper-slide><swiper-slide><img src="/img/f8.png" alt=""></swiper-slide>
      <swiper-slide><img src="/img/f9.png" alt=""></swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/free-mode';
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { FreeMode, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [FreeMode, Pagination],
        };
      },
    };
  </script>
  