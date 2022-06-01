<template>
  <div class="app">
    <div class="left">
      <div class="logo">LOGO</div>
      <side-menu :isCollapse="isCollapse"></side-menu>
      <div class="collapse-toggle">
        <el-icon v-show="!isCollapse" @click="isCollapse = true" :size="20">
          <arrow-left-bold />
        </el-icon>
        <el-icon v-show="isCollapse" @click="isCollapse = false" :size="20">
          <arrow-right-bold />
        </el-icon>
      </div>
    </div>
    <div class="right">
      <page-header></page-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from './components/Header.vue';
import SideMenu from './components/SideMenu.vue';
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons';

export default {
  setup() {
    const isCollapse = ref(false);
    const toggleSize = 16;
    return {
      isCollapse,
      toggleSize,
    };
  },
  components: {
    'page-header': Header,
    'side-menu': SideMenu,
    ArrowLeftBold,
    ArrowRightBold,
  },
};
</script>

<style lang="less">
.app {
  display: flex;
  height: 100vh;
  .left {
    height: 100%;
    background: #fff;
    box-shadow: 3px 3px 8px 2px rgb(0 0 0 / 6%);
    position: relative;
    .logo {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 36px;
      font-weight: 500;
      color: #0052d9;
    }

    .collapse-toggle {
      width: 100%;
      height: 64px;
      position: absolute;
      bottom: 0;
      border-top: #f0f0f0 1px dashed;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icon {
        cursor: pointer;
      }
    }
  }
  .right {
    flex: 1;
  }
}
</style>
