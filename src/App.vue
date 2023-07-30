<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Layouts/Header.vue';
import Footer from './components/Layouts/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

