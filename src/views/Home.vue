<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld :msg="msg" :age="age" :job="job" />
    <ul class="list">
      <li
        v-for="(item, indexkkkkkkkkkk) in listttttttt"
        :key="indexkkkkkkkkkk"
        class="item-item-item-itema"
        @click="onItem"
      >
        {{ item }}
      </li>
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
      msg: 'Welcome to Your Vue.js + TypeScript App',
      age: '22',
      job: 'projecter',
      listttttttt: [0, 1],
    }
  },
  mounted() {
    console.log('环境变量', process.env.NODE_ENV)
    console.log('环境变量', process.env.BASE_URL)
    console.log('环境变量', process.env.VUE_APP_API)
    console.log('环境变量', process.env.VUE_APP_PUBLIC_PATH)
  },
  methods: {
    onItem() {
      //
    },
  },
})
</script>

<style lang="scss" scoped>
.home {
  background: #fff;
  .list {
    background-color: #000;
  }
}
</style>
