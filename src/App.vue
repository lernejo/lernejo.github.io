<template>
  <div class="Header">
      <div class="Header-item">
          <router-link to="/" class="Header-link f4 d-flex flex-items-center">
              <span style="font-size: 1.5em;">
                  <i class="fas fa-puzzle-piece color-fg-accent"></i>
                  Lernejo
              </span>
          </router-link>
      </div>
      <div class="Header-item Header-item--full">
          Learning resources for programmers
      </div>
  </div>

  <div>
      <div class="col-2 float-left p-4">
          <nav class="menu" aria-label="content by year">
              <router-link to="/" class="menu-item">
                2021 - EPITA 4A
              </router-link>
              <router-link to="/2021/esiea" class="menu-item">
                2021 - ESIEA
              </router-link>
              <router-link to="/2020/epita" class="menu-item">
                2020 - EPITA
              </router-link>

          </nav>
      </div>
      <div class="col-10 float-right border-left p-4">
          <router-view/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style lang="scss">
@import "@primer/css/index.scss";
</style>
