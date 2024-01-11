<script setup>
import '@/assets/home.css'
</script>

<template>
  <div class="home-screen">
    <div class="home-screen-box">
      <h1>Nya LoCyanFrp! 乐青映射启动器</h1>
      <router-link to="/download">
        <v-btn><v-icon icon="mdi-download"></v-icon>下载</v-btn>
      </router-link>
      <a href="https://github.com/Muska-Ami/NyaLCF" target="_blank">
        <v-btn><v-icon icon="mdi-github"></v-icon>GitHub</v-btn>
      </a>
    </div>
  </div>
</template>
