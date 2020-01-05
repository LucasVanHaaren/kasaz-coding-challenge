import { shallowMount } from '@vue/test-utils'
import Apartment from '@/components/Apartment.vue'

describe('Apartment.vue', () => {

  const props = {
    title: "Title",
    price: 150000,
    sqm: 100,
    bedroomsCount: 4,
    bathroomsCount: 2
  };

  it('match snapshot', () => {
    const wrapper = shallowMount(Apartment, {
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(Apartment, {
      propsData: props
    });
    const res = props.price / props.sqm;
    expect(wrapper.find('h3').text()).toBe(`${res}€/m²`);
  });
})
