import { shallowMount, mount } from '@vue/test-utils'
import ApartmentList from '@/components/ApartmentList.vue'

describe('ApartmentList.vue', () => {

  const apartments = [
    {
      title: "Title 1",
      price: 150000,
      sqm: 110,
      bedroomsCount: 2,
      bathroomsCount: 1
    },
    {
      title: "Title 2",
      price: 250000,
      sqm: 120,
      bedroomsCount: 4,
      bathroomsCount: 2
    }
  ];

  it('match snapshot', () => {
    const wrapper = shallowMount(ApartmentList, {
      propsData: {
        loading: false,
        apartments: apartments
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders data correctly', () => {
    const wrapper = mount(ApartmentList, {
      propsData: {
        loading: false,
        apartments: apartments
      }
    });
    expect(wrapper.findAll('.apartment').length).toBe(2);
  });
  
  it('renders loader correctly', () => {
    const wrapper = shallowMount(ApartmentList, {
      propsData: {
        loading: true,
        apartments: apartments
      }
    });
    expect(wrapper.find('.loader').isVisible()).toBe(true);
  });
  
  it('renders no-data msg correctly', () => {
    const wrapper = shallowMount(ApartmentList, {
      propsData: {
        loading: false,
        apartments: []
      }
    });
    expect(wrapper.find('h1').isVisible()).toBe(true);
    expect(wrapper.find('h1').text()).toBe("Your search seems to have no results");
  });
})
