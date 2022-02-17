<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <ul class="list">
      <li v-for="(item, index) in list" :key="index" class="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      list: [0, 1],
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  background: #fff;
}
</style>
