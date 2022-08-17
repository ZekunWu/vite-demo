<template>
  <div class="app">
    <t-config-provider :global-config="enConfig">
      <div class="app-container">
        <Header></Header>
        <div class="content flex">
          <div class="left">
            <side-menu :isCollapse="isCollapse"></side-menu>
            <!-- <div class="collapse-toggle">
              <el-icon v-show="!isCollapse" @click="isCollapse = true" :size="20">
                <arrow-left-bold color="#fff" />
              </el-icon>
              <el-icon v-show="isCollapse" @click="isCollapse = false" :size="20">
                <arrow-right-bold color="#fff" />
              </el-icon>
            </div> -->
          </div>
          <div class="right">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </t-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import SideMenu from './components/SideMenu.vue';
// import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue';
import enConfig from 'tdesign-vue-next/es/locale/zh_CN';

const isCollapse = ref(false);
</script>

<style lang="less" scoped>
.app {
  height: 100vh;
  .content {
    height: calc(100vh - var(--page-header-height));
    overflow: hidden;
  }
  .left {
    height: 100%;
    background: @bg-color-dark;
    box-shadow: 3px 3px 8px 2px rgb(0 0 0 / 6%);
    position: relative;
    .logo {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      color: #0052d9;
    }
    .collapse-toggle {
      width: 100%;
      height: 64px;
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      padding-left: 24px;
      .el-icon {
        cursor: pointer;
      }
    }
  }
  .right {
    flex: 1;
    overflow: auto;
    background: @bg-color;
  }
}
</style>
