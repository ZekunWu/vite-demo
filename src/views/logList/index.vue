<template>
  <div class="logContainer">
    <module-title name="操作查询展示" class="module-title-position"></module-title>
    <div class="input-area">
      <t-input class="input-item" label="查询用户：" v-model="name" />
      <t-input class="input-item" label="查询IP：" v-model="ip" />
      <t-button @click="handleOnSearch">查询</t-button>
    </div>
    <t-table
      row-key="index"
      :data="logListStore.logList"
      :columns="columns"
      stripe
      hover
      table-layout="fixed"
      :pagination="pagination"
      cell-empty-content="-"
      :loading="logListStore.logListLoading"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import ModuleTitle from '@/components/ModuleTitle.vue';
import { useLogListStore } from '@/store/logList';

const logListStore = useLogListStore();
const { total } = storeToRefs(logListStore);
const name = ref('');
const ip = ref('');
const current = ref(1);
const pageSize = ref(10);
const pagination = reactive({
  defaultCurrent: current,
  defaultPageSize: pageSize,
  total: 0,
});
pagination.total = total;
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

const handleOnSearch = () => {
  current.value = 1;
  search();
};

const search = () => {
  logListStore.fetchLogList({
    page_size: pageSize.value,
    page_number: current.value,
    operation_user: name.value,
    operation_ip: ip.value,
  });
  // ?page_size=5&page_number=1&operation_user=tengyu&operation_ip=
};

const handleChange = ({ pagination }) => {
  pageSize.value = pagination.pageSize;
  current.value = pagination.current;
  search();
};

onMounted(() => {
  search();
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
