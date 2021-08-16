import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import Home from './../../src/views/home.vue';

describe('Home Page', () => {
  test('count init is 0', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [ElementPlus],
      },
    });
    expect(wrapper.vm.count).toBe(0);
  });
  test('local add', async () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [ElementPlus],
      },
    });
    wrapper.find('.local-add').trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });
  test('local object count init is 0', async () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [ElementPlus],
      },
    });
    expect(wrapper.vm.obj.count).toBe(0);
  });
  test('local object count add', async () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [ElementPlus],
      },
    });
    wrapper.find('.object-add').trigger('click');
    expect(wrapper.vm.obj.count).toBe(1);
  });
});
