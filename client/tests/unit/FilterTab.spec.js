import { shallowMount, mount } from '@vue/test-utils'
import FilterTab from '@/components/FilterTab.vue'

describe('FilterTab.vue', () => {

  it('match snapshot', () => {
    const wrapper = shallowMount(FilterTab);
    expect(wrapper.element).toMatchSnapshot();
  });

  // it('emit event correctly', () => {
  //   const wrapper = shallowMount(FilterTab);
  //   expect(wrapper.find('button').exists()).toBe(true);
  // });

})
