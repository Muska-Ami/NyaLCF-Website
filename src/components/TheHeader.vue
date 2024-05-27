<template>
  <v-app-bar color="#e487bc70" class="rounded-b-lg">
    <v-app-bar-title color="#ffe2f2" style="font-weight: 700">
      <router-link to="/" style="text-decoration: none"> Nya LoCyanFrp! </router-link>
    </v-app-bar-title>
    <template v-slot:append>
      <router-link to="/download">
        <v-btn icon="mdi-download"></v-btn>
      </router-link>
      <a href="https://docs-nyalcf.1l1.icu" target="_blank">
        <v-btn icon="mdi-book"></v-btn>
      </a>
      <a href="https://github.com/Muska-Ami/NyaLCF" target="_blank">
        <v-btn icon="mdi-github"></v-btn>
      </a>
    </template>
  </v-app-bar>
</template>
