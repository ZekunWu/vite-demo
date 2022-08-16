import { defineStore } from 'pinia';
import { getLogList } from '@/models/logList';

export const useLogListStore = defineStore({
  id: 'logList',
  state: () => ({
    logListLoading: false,
    logList: [],
  }),
  getters: {},
  actions: {
    async fetchLogList() {
      this.logListLoading = true;
      const data = await getLogList();
      this.logList = data;
      this.logListLoading = false;
    },
  },
});
