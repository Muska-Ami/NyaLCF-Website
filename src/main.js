import '@/assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueShowdownPlugin } from 'vue-showdown';

import App from '@/App.vue'
import router from '@/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const app = createApp(App)

const theme = {
  dark: true,
  colors: {
    primary: '#e487bc70',
    secondary: '#30192670',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      theme,
    },
    defaultTheme: 'theme',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.use(VueShowdownPlugin, {
  // 设置 showdown 默认 flavor
  flavor: 'github',
  // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
  options: {
    emoji: false,
  },
});

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
