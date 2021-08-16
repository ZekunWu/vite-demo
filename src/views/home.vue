<template>
  <div class="home">
    <div class="container">
      home
      <div><router-link to="/test">go test</router-link></div>
      <div>{{ count }}</div>
      <el-button class="local-add" @click="count++">add</el-button>
      <div>{{ obj.count }}</div>
      <el-button class="object-add" @click="obj.count++">add</el-button>
      <tailwind-demo></tailwind-demo>
    </div>
  </div>
</template>

<script>
import TailwindDemo from '@/components/TailwindDemo.vue';
import { ref, reactive } from 'vue';

export default {
  components: {
    TailwindDemo,
  },
  setup() {
    const count = ref(0);
    const obj = reactive({ count: 0 });
    return {
      count,
      obj,
    };
  },
};
</script>

<style scoped lang="less">
.home {
  padding: 20px;
  .container {
    padding: 20px;
    background: #fff;
  }
  a {
    color: #42b983;
  }
}
</style>
