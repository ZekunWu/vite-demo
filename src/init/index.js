import bindLodash from './bind-lodash';
import bindElement from './bind-element';

function init(app) {
  // 挂在lodash在window全局对象上
  bindLodash();
  // 加载Element
  bindElement(app);
}

export { init };
