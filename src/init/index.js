import bindLodash from './bind-lodash';

function init() {
  // 挂在lodash在window全局对象上
  bindLodash();
}

export { init };
