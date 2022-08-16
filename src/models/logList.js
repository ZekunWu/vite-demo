import api from '@/config/api';
import request from '@/utils/request';
// import { logList } from '@/mock/logList';

export function getLogList(query) {
  return request({
    url: api.getLogList,
    method: 'get',
    params: query,
  });
  // return logList.data;
}
