<template>
  <el-menu
    default-active="2"
    class="sider-menu"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
  </el-menu>
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
  &:not(.el-menu--collapse) {
    width: 250px;
  }
}
</style>
