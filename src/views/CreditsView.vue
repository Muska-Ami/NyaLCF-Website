<script setup>
import '@/assets/credits.css'
</script>

<template>
  <div class="credits">
    <v-card class="start-card">
      <v-card-title>贡献者</v-card-title>
      <v-card-subtitle>
        <a href="https://github.com/Muska-Ami/NyaLCF/contributors" target="_blank">
          <img src="https://contrib.rocks/image?repo=Muska-Ami/NyaLCF" height="32px" />
          <br />https://github.com/Muska-Ami/NyaLCF/contributors
        </a>
      </v-card-subtitle>
      <v-card-text>
        感谢所有贡献者为 Nya LoCyanFrp! 的贡献。他们的贡献使 Nya LoCyanFrp! 变得更好。
      </v-card-text>
      <v-card-title>仓库统计</v-card-title>
      <v-card-text>
        <img
          src="https://repobeats.axiom.co/api/embed/8657905cfb65146e66a5d6039165f705d6403531.svg"
          alt="Repobeats analytics image"
          width="100%"
        />
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>技术栈</v-card-title>
      <v-card-text>
        Nya LoCyanFrp! 由 <a href="https://flutter.dev" target="_blank">Flutter</a> 强力驱动。
      </v-card-text>
    </v-card>
  </div>
</template>
