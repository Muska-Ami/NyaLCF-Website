<script setup>
import '@/assets/download.css'

import releases from '@/axios/releases'
import { computed, watch } from 'vue';
import { ref } from 'vue'

var loading = ref(true)
var error = ref(false)
var error_msg = ref('')

var version = ref('')
var branch = ref('')
var assets = ref([])
var readme = ref('')
var code = ref([])
var selector = ref([])
var list = ref([])
var choosen = ref('')


watch(() => choosen.value,
  (value) => {
    let id = selector.value.indexOf(value)
    releases
      .getRelease(list.value[id].toString())
      .then((result) => {
        if (result.status) {
          console.log(result)
        }
      })
  }
)



releases
  .getList()
  .then((result) => {
    if (result.status) {
      for (let id of result.list) {
        selector.value.push(id[0])
        list.value.push(id[1])
      }
    }
  })
  .catch((err) => {
    error.value = true
    error_msg.value = err.message
    loading.value = false
  })


releases
  .getRelease('latest')
  .then((result) => {
    if (result.status) {
      version.value = result.tag_name
      branch.value = result.branch
      assets.value = result.assets
      readme.value = result.body
      code.value = result.code

      loading.value = false
    }
  })
  .catch((err) => {
    error.value = true
    error_msg.value = err.message
    loading.value = false
  })
</script>



<template>
  <div class="download">
    <v-card class="download-latest-card" :loading="loading">
      <v-card-item v-if="!error">
        <v-card-title style="font-weight: 600">最新发行版本</v-card-title>
        <v-card-subtitle>
          <span class="download-version-mark">{{ version }}</span>
          <v-chip class="download-branch-chip">
            <v-icon icon="mdi-source-branch"></v-icon>
            <span>{{ branch }}</span>
          </v-chip>
        </v-card-subtitle>
        <v-card-text>
          <div class="download-readme">
            <h3>
              <v-icon icon="mdi-file-document-outline"></v-icon>
              README.md
            </h3>
            <v-divider style="margin-block: 0.6rem" thickness="5"></v-divider>
            <vue-showdown class="markdown-body" :markdown="readme"></vue-showdown>
          </div>
          <div class="download-assets">
            <h3 class="download-assets-title">
              <v-icon icon="mdi-package-variant-closed"></v-icon>资源
            </h3>
            <v-list style="background-color: #00000000">
              <v-list-item v-for="asset in assets" :key="asset" :href="asset.browser_download_url" style="color:#ffe2f2">
                {{ asset.name }}
                <span class="span"><v-icon icon="mdi-package"></v-icon>
                  {{ Math.round(asset.size / 1048576) }} MB</span>
                <span class="span"><v-icon icon="mdi-clock"></v-icon> {{ asset.created_at }}</span>
              </v-list-item>
            </v-list>
          </div>
          <div class="sourcecode-assets">
            <h3 class="sourcecode-assets-title">
              <v-icon icon="mdi-git"></v-icon>源代码
              <v-btn v-for="ball in code.assets" :href="ball.url">
                {{ ball.name }}
              </v-btn>
            </h3>
          </div>
        </v-card-text>
      </v-card-item>
      <v-card-item v-else>
        <v-card-title>最新发行版本</v-card-title>
        <v-card-subtitle>获取失败</v-card-subtitle>
      </v-card-item>
    </v-card>
    <v-card class="download-old-card">
      <v-card-item v-if="!error">
        <v-card-title style="font-weight: 600">旧的发行版本</v-card-title>
        这一块暂时没写
        <v-select v-model="choosen" label="版本" :items="selector" rounded="lg"></v-select>
      </v-card-item>
      <v-card-item v-else>
        <v-card-title>旧的发行版本</v-card-title>
        <v-card-subtitle>获取失败</v-card-subtitle>
      </v-card-item>
    </v-card>
  </div>
  <div class="fix-height">
  </div>
</template>
