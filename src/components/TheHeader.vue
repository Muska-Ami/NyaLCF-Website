<template>
  <v-app-bar color="primary">
    <v-app-bar-title>
      <router-link to="/" style="text-decoration: none;">
        Nya LoCyanFrp! 乐青映射启动器
      </router-link>
    </v-app-bar-title>
    <template v-slot:append>
      <router-link to="/download">
        <v-btn icon="mdi-download"></v-btn>
      </router-link>
      <a href="https://github.com/Muska-Ami/NyaLCF" target="_blank">
        <v-btn icon="mdi-github"></v-btn>
      </a>
    </template>
  </v-app-bar>
</template>
