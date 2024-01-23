<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <v-skeleton-loader>
    <v-layout>
      <TheHeader></TheHeader>
      <main>
        <RouterView />
        <TheFooter></TheFooter>
      </main>
    </v-layout>
  </v-skeleton-loader>
</template>
