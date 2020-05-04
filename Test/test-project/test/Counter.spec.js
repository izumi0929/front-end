import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'
jest.setTimeout(30000);

describe('Counter.vue', () => {
  const wrapper = shallowMount(Counter)
  it('increments count when button is clicked', done => {
    let divText = wrapper.find('h1').text()
    const increment = jest.fn() //mock function
    const button = wrapper.find('button')
    
    wrapper.setMethods( { increment })
    console.log('before increment count '+ wrapper.vm.count)
    console.log('before increment divText '+ divText)
    button.trigger('click')
    button.trigger('click')
    wrapper.vm.$nextTick(() => {
      console.log('after increment count '+ wrapper.vm.count)
      console.log('after increment divText '+ divText)
      expect(divText).toEqual('1')
      done()
    })
  })
})