<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <v-skeleton-loader>
    <v-layout>
      <TheHeader></TheHeader>
      <main>
        <RouterView />
      </main>
    </v-layout>
  </v-skeleton-loader>
</template>
