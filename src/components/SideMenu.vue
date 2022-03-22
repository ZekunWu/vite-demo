<template>
  <el-menu default-active="2" class="sider-menu" :collapse="isCollapse">
    <el-sub-menu index="1">
      <template #title>
        <span>导航一</span>
      </template>
      <el-menu-item-group title="group one">
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
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
