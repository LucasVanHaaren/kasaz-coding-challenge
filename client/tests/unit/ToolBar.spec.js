import { shallowMount, mount } from '@vue/test-utils'
import ToolBar from '@/components/ToolBar.vue'

describe('ToolBar.vue', () => {

  it('match snapshot', () => {
    const wrapper = shallowMount(ToolBar, {
      propsData: {
        showFilters: false,
        showClearFiltersBtn: false
      },
      mocks: {
        $vuetify: {
          breakpoint: {
            mdAndUp: true
          } 
        }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders icon correctly', () => {
    const wrapper = shallowMount(ToolBar, {
      propsData: {
        showFilters: false,
        showClearFiltersBtn: false
      },
      mocks: {
        $vuetify: {
          breakpoint: {
            mdAndUp: true
          } 
        }
      }
    });
    expect(wrapper.find('v-icon').isVisible()).toBe(true);
  });

})
