<template>
  <div class="header flex items-center px-6 justify-between">
    <!-- <a href="/"><img class="logo" src="../assets/images/logo.png" alt="" /></a> -->
    <div class="title">
      <div class="text-white font-bold">{{ title }}</div>
    </div>
    <div class="avatar">
      <el-avatar :size="avatarSize" :src="avatarUrl"></el-avatar>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import { getUserInfo } from '@/utils/user';

const title = '**平台';
const avatarSize = 36;
const avatarUrl = ref('');
// onBeforeMount(async () => {
//   avatarUrl.value = await getAvatarImg();
// });
onMounted(() => {
  // getUserInfo();
});
</script>

<style lang="less" scoped>
.header {
  .logo {
    width: 120px;
    height: 40px;
  }
  height: var(--page-header-height);
  background-color: @bg-color-dark;
}
</style>
