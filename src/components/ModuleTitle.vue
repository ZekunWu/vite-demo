<template>
  <div class="module-title">
    <div class="module-name">
      {{ name }}
    </div>
    <!-- <div class="module-tip" v-if="tip">
      <el-tooltip placement="top" effect="light" :content="tip">
        <el-icon color="orange"><question-filled /></el-icon>
      </el-tooltip>
    </div>
    <div class="module-date" v-if="date">({{ date }})</div> -->
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    tip: String,
    date: String,
  },
};
</script>

<style lang="less" scoped>
.module-title {
  color: #333;
  height: 24px;
  line-height: 24px;
  display: flex;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 24px;
    top: 0;
    background-color: @primary-color;
  }
  .module-name {
    margin-left: 12px;
    font-size: 14px;
    font-weight: 500;
  }
  .module-tip {
    margin-left: 10px;
    margin-top: 2px;
  }
  .module-date {
    margin-left: 10px;
    font-size: 14px;
    color: #aaa;
  }
}
</style>
