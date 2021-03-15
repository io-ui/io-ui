import chai, { expect } from 'chai'
import spies from 'chai-spies'
import { mount } from '@vue/test-utils'
import IoIcon from '../../../packages/IoIcon'

chai.use(spies)

describe('IoIcon', function () {
    // icon 默认测试
    it('IoIcon default', () => {
        const wrapper = mount(IoIcon)

        // div
        let div = wrapper.vm.$el
        let iconDivTagName = div.tagName
        let iconDivClassName = div.className
        expect(iconDivTagName.trim().toLowerCase()).to.eq('div')
        expect(iconDivClassName.trim().toLowerCase()).to.eq('io-icon')

        // svg
        let svg = div.firstElementChild
        let svgTagName = svg.tagName
        let svgClassList = svg.classList
        expect(svgTagName.trim().toLowerCase()).to.eq('svg')
        expect(svgClassList[0].trim().toLowerCase()).to.eq('io-auto')
    })

    // icon 默认测试
    it('IoIcon default', () => {
        const wrapper = mount(IoIcon, {
            propsData:{
                name: 'code',
                size: '14px'
            }
        })

        // div
        let div = wrapper.vm.$el
        expect(wrapper.html()).contain('display: inline-flex; height: 14px; width: 14px;')

        // svg
        let svg = div.firstElementChild
        let svgTagName = svg.tagName
        let svgClassList = svg.classList
        expect(svgTagName.trim().toLowerCase()).to.eq('svg')
        expect(svgClassList[0].trim().toLowerCase()).to.eq('io-code')
    })

    // icon 默认测试
    it('IoIcon default', () => {
        const wrapper = mount(IoIcon, {
            propsData:{
                name: 'code',
                size: 14
            }
        })

        // div
        let div = wrapper.vm.$el
        expect(wrapper.html()).contain('display: inline-flex; height: 14px; width: 14px;')

        // svg
        let svg = div.firstElementChild
        let svgTagName = svg.tagName
        let svgClassList = svg.classList
        expect(svgTagName.trim().toLowerCase()).to.eq('svg')
        expect(svgClassList[0].trim().toLowerCase()).to.eq('io-code')
    })
});
