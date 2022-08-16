import { defineStore } from 'pinia';
import { getLogList } from '@/models/logList';

export const useLogListStore = defineStore({
  id: 'logList',
  state: () => ({
    logListLoading: false,
    logList: [],
    total: 0,
  }),
  getters: {},
  actions: {
    async fetchLogList(query) {
      this.logListLoading = true;
      const data = await getLogList(query);
      this.logList = data.sensitive_operations;
      this.total = data.total_count;
      this.logListLoading = false;
    },
  },
});
