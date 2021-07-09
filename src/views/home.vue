<template>
  <div class="home">
    home
    <div><router-link to="/test">go test</router-link></div>
    <div>{{ count }}</div>
    <button @click="count++">add</button>
    <div>{{ obj.count }}</div>
    <button @click="obj.count++">add</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
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
  a {
    color: #42b983;
  }
}
</style>
