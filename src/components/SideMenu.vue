<template>
  <t-menu class="sider-menu" :collapse="isCollapse" default-value="logList">
    <t-menu-item value="logList"> 敏感操作管理 </t-menu-item>
  </t-menu>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean,
  },
};
</script>

<style lang="less" scoped>
.sider-menu {
  border-right: none;
  background-color: #2c2c2c;
  font-weight: 500;
  .t-menu__item.t-is-active {
    background: @primary-color;
  }
}
</style>
