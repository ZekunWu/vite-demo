<template>
  <div class="test">
    <div class="container">
      test
      <div><router-link to="/">go home</router-link></div>
      <div>{{ count }}</div>
      <button @click="add">add</button>
      <div>{{ double }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState({
      count: 'count',
    }),
    ...mapGetters({
      double: 'double',
    }),
  },
  methods: {
    ...mapActions({
      add: 'increment',
    }),
  },
};
</script>

<style scoped lang="less">
.test {
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
