import { Local } from './storage';
const getUserInfo = async () => {
  if (Local.get('userinfo')) return Local.get('userinfo');
  const res = await fetch('/ts:auth/tauth/info.ashx');
  const data = await res.json();
  if (!Local.get('userinfo')) {
    Local.set('userinfo', data);
  }
  return data;
};

const getAvatarImg = async () => {
  let { EngName } = await getUserInfo();
  if (!EngName) {
    EngName = 'tengyu';
  }
  return `http://r.hrc.oa.com/photo/150/${EngName}.png`;
};

export { getUserInfo, getAvatarImg };
