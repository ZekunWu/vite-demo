// 灯塔上报
import BeaconAction from '@tencent/beacon-web-sdk';
import { getUserInfo } from '@/utils/user';

const beacon = new BeaconAction({
  appkey: import.meta.env.VITE_APP_BEACON_KEY,
});

export async function reportPageEnter(params = {}) {
  const userData = await getUserInfo();
  const { PositionName, DeptNameString, EngName } = userData;
  // eslint-disable-next-line camelcase
  const [bg_name, dept_name, center_name, group_name] = DeptNameString.split('/');
  const data = {
    ...params,
    dept_name,
    center_name,
    bg_name,
    group_name,
    position_name: PositionName,
    user_name: EngName,
  };
  return beacon.onUserAction('page_enter', data);
}

export async function reportUserClick(params = {}) {
  const userData = await getUserInfo();
  const { PositionName, DeptNameString, EngName } = userData;
  // eslint-disable-next-line camelcase
  const [bg_name, dept_name, center_name, group_name] = DeptNameString.split('/');
  const data = {
    ...params,
    bg_name,
    dept_name,
    center_name,
    group_name,
    position_name: PositionName,
    user_name: EngName,
  };
  return beacon.onUserAction('user_click', data);
}
