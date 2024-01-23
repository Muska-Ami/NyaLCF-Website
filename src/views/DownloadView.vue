<script setup>
import '@/assets/download.css'

import releases from '@/axios/releases'
import { watch } from 'vue';
import { ref } from 'vue'

var mirror_url = "https://proxy-gh.1l1.icu/"
var mirror = ref(true)
var mirror_old = ref(true)

var loading = ref(true)
var old_loading = ref(false)
var error = ref(false)
var error_msg = ref('')
var show = ref(false)

var version = ref('')
var branch = ref('')
var assets = ref([])
var oldAssets = ref([])
var readme = ref('')
var code = ref([])
var oldCode = ref([])

var selector = ref([])
var list = ref([])
var chosen = ref('')


watch(() => chosen.value,
  async (value) => {
    old_loading.value = true
    let id = selector.value.indexOf(value)
    await releases
      .getRelease(list.value[id].toString())
      .then((result) => {
        if (result.status) {
          oldAssets.value = result.assets
          oldCode.value = result.code
        }
      })
    show.value = true
    old_loading.value = false
  }
)



releases
  .getList()
  .then((result) => {
    if (result.status) {
      const full_list = result.list
      full_list.shift()
      for (let id of full_list) {
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
        <v-switch color="primary" class="mirror-switch" v-model="mirror" label="使用镜像源"></v-switch>
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
              <v-list-item v-for="asset in assets" :key="asset" style="color:#ffe2f2">
                <a v-if="mirror" :href="mirror_url + asset.browser_download_url">
                  {{ asset.name }}
                  <span class="span"><v-icon icon="mdi-package"></v-icon>
                    {{ Math.round(asset.size / 1048576) }} MB</span>
                  <span class="span"><v-icon icon="mdi-clock"></v-icon> {{ asset.created_at }}</span>
                </a>
                <a v-else :href="asset.browser_download_url">
                  {{ asset.name }}
                  <span class="span"><v-icon icon="mdi-package"></v-icon>
                    {{ Math.round(asset.size / 1048576) }} MB</span>
                  <span class="span"><v-icon icon="mdi-clock"></v-icon> {{ asset.created_at }}</span>
                </a>
              </v-list-item>
            </v-list>
          </div>
          <div class="sourcecode-assets">
            <h3 class="sourcecode-assets-title">
              <v-icon icon="mdi-git"></v-icon>源代码
              <v-btn v-for="ball in code.assets" :key="ball" :href="ball.url">
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
    <v-card class="download-old-card" :loading="old_loading">
      <v-card-item v-if="!error">
        <v-switch color="primary" class="mirror-switch" v-model="mirror_old" label="使用镜像源"></v-switch>
        <v-card-title style="font-weight: 600">旧的发行版本</v-card-title>
        <v-card-subtitle>不会获得任何更新，也不会提供任何支持</v-card-subtitle>
        <v-card-item>
          <v-select v-model="chosen" label="版本" :items="selector"></v-select>
          <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"
            class="download-old-card-btn"></v-btn>
          <div class="download-assets" v-show="show">
            <h3 class="download-assets-title">
              <v-icon icon="mdi-package-variant-closed"></v-icon>资源
            </h3>
            <v-list style="background-color: #00000000">
              <v-list-item v-for="asset in oldAssets" :key="asset" style="color:#ffe2f2">
                <a v-if="mirror_old" :href="mirror_url + asset.browser_download_url">
                  {{ asset.name }}
                  <span class="span"><v-icon icon="mdi-package"></v-icon>
                    {{ Math.round(asset.size / 1048576) }} MB</span>
                  <span class="span"><v-icon icon="mdi-clock"></v-icon> {{ asset.created_at }}</span>
                </a>
                <a v-else :href="asset.browser_download_url">
                  {{ asset.name }}
                  <span class="span"><v-icon icon="mdi-package"></v-icon>
                    {{ Math.round(asset.size / 1048576) }} MB</span>
                  <span class="span"><v-icon icon="mdi-clock"></v-icon> {{ asset.created_at }}</span>
                </a>
              </v-list-item>
            </v-list>
          </div>
          <div class="sourcecode-assets" v-show="show">
            <h3 class="sourcecode-assets-title">
              <v-icon icon="mdi-git"></v-icon>源代码
              <v-btn v-for="ball in oldCode.assets" :key="ball" :href="ball.url">
                {{ ball.name }}
              </v-btn>
            </h3>
          </div>
        </v-card-item>

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
