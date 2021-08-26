import { shallowMount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent.vue'

describe('TestComponent.vue', () => {
  test('Contains "Hello, World!', () => {
    const wrapper = shallowMount(TestComponent)

    expect(wrapper.text()).toContain('Hello, World!')
  })
})
