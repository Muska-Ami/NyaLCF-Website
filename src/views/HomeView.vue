<script setup>
import '@/assets/home.css'
</script>

<template>
  <div class="home-screen">
    <!-- <div class="home-screen-box" style="margin-top: 7rem;">
      <h2>发行信息</h2>
      <v-divider thickness="10"></v-divider>
      <span>{{ body }}</span>
    </div> -->
    <div class="home-screen-box">
      <h1>Nya LoCyanFrp! 乐青映射启动器</h1>
      <p>下一代乐青映射启动器</p>
      <router-link to="/download">
        <v-btn><v-icon icon="mdi-download"></v-icon>下载</v-btn>
      </router-link>
      <a href="https://github.com/Muska-Ami/NyaLCF" target="_blank">
        <v-btn><v-icon icon="mdi-github"></v-icon>GitHub</v-btn>
      </a>
      <!-- <v-chip label variant="elevated" v-if="!error">
        <v-icon icon="mdi-cloud-check" size="small"></v-icon>
        <span>{{ version }}</span>
      </v-chip>
      <v-chip label variant="elevated" v-else>
        <v-icon icon="mdi-alert" size="small"></v-icon>
      </v-chip> -->
    </div>
    <!-- <div class="home-screen-box">
      <h2>作者</h2>
      <v-card :href=author.github_url target="_blank">
        <v-card-item>
          <v-avatar size="60">
            <v-img :alt=author.name :src=author.avatar_url></v-img>
          </v-avatar>
          <span style="margin-left:0.5rem;font-weight:700;font-size:xx-larger;">{{ author.name }}</span>
        </v-card-item>
        <v-card-item>
          <v-img
            src="https://readme-typing-svg.herokuapp.com?font=Poppins&pause=1000&color=55CAF7&background=54DCFF00&center=%E7%9C%9F&vCenter=%E7%9C%9F&repeat=%E7%9C%9F&width=435&lines=Keep+doing%2C+keep+loving%E2%9D%A4."
            cover>
          </v-img>
        </v-card-item>
      </v-card>
      以及
      <a href="https://github.com/Muska-Ami/NyaLCF/graphs/contributors" target="_blank">
        其他人
      </a>
    </div> -->
  </div>
</template>
