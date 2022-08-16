<template>
  <div class="logContainer">
    <module-title name="操作查询展示" class="module-title-position"></module-title>
    <div class="input-area">
      <t-input class="input-item" label="查询ID：" />
      <t-input class="input-item" label="查询IP：" />
      <t-button>查询</t-button>
    </div>
    <t-table
      row-key="index"
      :data="logListStore.logList"
      :columns="columns"
      stripe="true"
      hover="true"
      table-layout="fixed"
      :size="size"
      :pagination="pagination"
      cell-empty-content="-"
      @row-click="handleRowClick"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ModuleTitle from '@/components/ModuleTitle.vue';
import { useLogListStore } from '@/store/logList';

const logListStore = useLogListStore();
const total = 28;
const columns = [
  {
    colKey: 'platform',
    title: '数据源',
    // 对齐方式
    align: 'center',
    // 设置列类名
    className: 'custom-column-class-name',
    // 设置列属性
    attrs: {
      'data-id': 'first-column',
    },
  },
  {
    colKey: 'operation_user',
    title: '操作人',
  },
  {
    colKey: 'operation_time',
    title: '操作时间',
  },
  {
    colKey: 'operation_ip',
    title: '操作IP',
  },
  {
    colKey: 'operation_content',
    title: '操作内容',
    ellipsis: true,
  },
];

const pagination = {
  defaultCurrent: 2,
  defaultPageSize: 5,
  total,
};

onMounted(() => {
  logListStore.fetchLogList();
});
</script>

<style scoped lang="less">
.logContainer {
  margin: 10px;
  padding: 20px;
  background: #fff;
}
.module-title-position {
  margin-bottom: 12px;
}
.input-area {
  display: flex;
}
.input-item {
  width: 250px;
  margin-right: 20px;
}
</style>
