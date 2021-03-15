import chai, { expect } from 'chai'
import spies from 'chai-spies'
import { mount } from '@vue/test-utils'
import IoHelloWorld from '../../../packages/HelloWorld'

chai.use(spies)

describe('HelloWorld', function () {
    // 默认按钮测试
    it('HelloWorld', () => {
        const wrapper = mount(IoHelloWorld)
        let a = wrapper.vm.$el
        let html = a.innerHTML
        let tagName = a.tagName
        let className = a.className
        expect(html.trim()).to.eq('hello,world')
        expect(tagName.trim()).to.eq('DIV')
        expect(className.trim()).to.eq('helloworld')
    })
});
