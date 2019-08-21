import { shallowMount } from '@vue/test-utils'
import magic8Ball from '@/components/magic8Ball.vue'

describe('magic8Ball.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(magic8Ball, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
