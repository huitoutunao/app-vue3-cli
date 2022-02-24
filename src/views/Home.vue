<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld :msg="msg" :age="age" :job="job" />
    <ul class="list">
      <li
        v-for="(item, kkkkkkkkkkkkkkk) in listlistlistlist"
        :key="kkkkkkkkkkkkkkk"
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
      listlistlistlist: [0, 1],
    }
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
