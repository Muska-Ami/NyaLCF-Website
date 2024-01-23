<template>
    <v-footer>
      <div class="footer-box">
        <h2>Credits</h2>
        <p>
          <h3>
            开源协议
            <a href="https://github.com/Muska-Ami/NyaLCF/blob/main/LICENSE" target="_blank"><v-icon icon="mdi-license"></v-icon>MIT</a>
          </h3>
          <h3>贡献者</h3>
          <router-link to="/credits">
            <img src="https://contrib.rocks/image?repo=Muska-Ami/NyaLCF" height="32px" />
          </router-link>
        </p>
          <router-link to="/credits">
            <v-btn><v-icon icon="mdi-credit-card-chip"></v-icon>更多</v-btn>
          </router-link>
      </div>
        <p>
          Copyright © 2023 夏沫花火zzz🌙.
        </p>
    </v-footer>
</template>