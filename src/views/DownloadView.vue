<script setup>
import '@/assets/download.css'

import releases from '@/axios/releases'
import { ref } from 'vue'

var loading = ref(true)
var error = ref(false)
var error_msg = ref('')

var version = ref('')
var branch = ref('')
var assets = ref([])

releases
  .getLatest()
  .then((result) => {
    if (result.status) {
      version.value = result.tag_name
      branch.value = result.branch
      assets.value = result.assets

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
  <div class="download-box">
    <v-card class="download-latest-card" :loading="loading">
      <v-card-item v-if="!error">
        <v-card-title>最新发行版本</v-card-title>
        <v-card-subtitle>
          <span class="download-version-mark">{{ version }}</span>
          <v-chip class="download-branch-chip">
            <v-icon icon="mdi-source-branch"></v-icon>
            <span>{{ branch }}</span>
          </v-chip>
        </v-card-subtitle>
        <v-card-text>
          <h3><v-icon icon="mdi-package-variant-closed"></v-icon> 资源</h3>
          <div class="download-assets">
            <v-list>
              <v-list-item v-for="asset in assets" :key="asset" color="primary" label>
                <a :href="asset.browser_download_url">{{ asset.name }}</a>
                <span class="span"
                  ><v-icon icon="mdi-package"></v-icon>
                  {{ Math.round(asset.size / 1024 / 1024) }} MB</span
                >
                <span class="span"><v-icon icon="mdi-clock"></v-icon> {{ asset.created_at }}</span>
              </v-list-item>
            </v-list>
          </div>
        </v-card-text>
      </v-card-item>
      <v-card-item v-else>
        <v-card-title>最新发行版本</v-card-title>
        <v-card-subtitle>获取失败</v-card-subtitle>
      </v-card-item>
    </v-card>
  </div>
</template>
