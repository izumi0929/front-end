import { mount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'
import Vue from 'vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', async () => {
    const wrapper = mount(Counter)
    const button = wrapper.find('button')
    console.log('before increment count '+ wrapper.vm.count)
    button.trigger('click')
    await Vue.nextTick()
    console.log('after increment count '+ wrapper.vm.count)
    expect(wrapper.find('h1').text()).toBe('1')
  })
})