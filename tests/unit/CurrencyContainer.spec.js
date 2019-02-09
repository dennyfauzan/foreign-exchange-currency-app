import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import CurrencyContainer from '@/components/CurrencyContainer.vue';
import CurrencyBox from '@/components/CurrencyBox.vue';
import axios from '../../axios-instance';

const { foreignExchange } = axios;

describe('CurrencyContainer.vue', () => {
  let wrapper;
  Vue.use(Vuetify);

  beforeEach(() => {
    wrapper = shallowMount(CurrencyContainer);
  });

  it('should have initial value 10 at input value currency', () => {
    expect(wrapper.vm.amount).toBe(10);
  });

  it('should add seletedCurrency data when select option was clicked', () => {
    foreignExchange.get('/latest?base=USD')
      .then((response) => {
        wrapper.setProps({ currencyRates: response.data.rates });
        wrapper.setData({ selectedCurrency: ['IDR', 'AUD'] });
        const el = wrapper.find('.listitem:nth-of-type(5)').trigger('click');
        expect(wrapper.vm.selectedCurrency).toHaveLength(3);
        return el;
      });
  });

  it('should auto update detailCurrency whenever selectedCurrency have data item', () => {
    foreignExchange.get('/latest?base=USD')
      .then((response) => {
        wrapper.setProps({ currencyRates: response.data.rates });
        wrapper.setData({ selectedCurrency: ['IDR', 'AUD'] });
        expect(wrapper.vm.detailCurrency).toHaveLength(2);
      });
  });

  it('calls removeCurrency when click on (-) btn', () => {
    foreignExchange.get('/latest?base=USD')
      .then((response) => {
        wrapper.setProps({ currencyRates: response.data.rates });
        wrapper.setData({ selectedCurrency: ['IDR', 'AUD'] });

        wrapper.vm.removeCurrency = jest.fn();
        const childCmp = shallowMount(CurrencyBox);
        const el = childCmp.find('.IDR .btn-remove').trigger('click');
        expect(wrapper.vm.removeCurrency).toBeCalled();
        return el;
      });
  });

  it('the fetch fails with an error', () => {
    foreignExchange.get('/laztestt?base=USD')
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch(e => expect(e).toMatch('error'));
  });
});
