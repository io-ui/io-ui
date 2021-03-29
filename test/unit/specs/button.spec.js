import chai, { expect } from 'chai'
import spies from 'chai-spies'
import { mount } from '@vue/test-utils'
import IoButton from '../../../packages/IoButton'
import IoIcon from '../../../packages/IoIcon'

chai.use(spies)

describe('IoButton style test', function () {
    it('IoButton default style', () => {
        let wrapper = mount(IoButton);
        let vm = wrapper.vm;
        let div = vm.$el
        let classList = div.classList
        expect(classList[0].trim().toLowerCase()).to.eq('io-button')
        expect(classList[1].trim().toLowerCase()).to.eq('io-button-default')
    })

    it('IoButton click', () => {
        let wrapper = mount(IoButton);
        let vm = wrapper.vm;
        let i = 1
        vm.$on('click', function () {
            i = i + 1
            expect(1).to.eq(1)
        })
        let spy = chai.spy(function () {
        })
        vm.$on('click', spy)
        // 希望这个函数被执行
        let button = wrapper.vm.$el
        button.click()
        expect(i).to.eq(2)
        expect(spy).to.have.been.called()
    })
})

describe('IoButton disabled', () => {
    it('IoButton disabled style', () => {
        let wrapper = mount(IoButton, {
            propsData: {
                disabled: true
            }
        });
        let vm = wrapper.vm;
        let div = vm.$el
        let classList = div.classList
        expect(classList[0].trim().toLowerCase()).to.eq('io-button')
        expect(classList[1].trim().toLowerCase()).to.eq('io-button-default')
        expect(classList[2].trim().toLowerCase()).to.eq('is-disabled')
    })

    it('IoButton disabled click', () => {
        let wrapper = mount(IoButton, {
            propsData: {
                disabled: true
            }
        });
        let vm = wrapper.vm;
        let i = 1;
        vm.$on('click', function () {
            i = i + 1
            expect(1).to.eq(1)
        })
        let spy = chai.spy(function () {
        })
        vm.$on('click', spy)
        // 希望这个函数被执行
        let button = wrapper.vm.$el
        button.click()
        expect(i).to.eq(1)
    })
})

describe('IoButton size', () => {
    it('IoButton small size', () => {
        let wrapper = mount(IoButton, {
            propsData: {
                size: 'small'
            }
        });
        let vm = wrapper.vm;
        let div = vm.$el
        let classList = div.classList
        expect(classList[0].trim().toLowerCase()).to.eq('io-button')
        expect(classList[2].trim().toLowerCase()).to.eq('size-small')
        expect(classList[1].trim().toLowerCase()).to.eq('io-button-default')
    })

    it('IoButton normal size', () => {
        let wrapper = mount(IoButton);
        let vm = wrapper.vm;
        let div = vm.$el
        let classList = div.classList
        expect(classList[0].trim().toLowerCase()).to.eq('io-button')
        expect(classList[2].trim().toLowerCase()).to.eq('size-normal')
        expect(classList[1].trim().toLowerCase()).to.eq('io-button-default')
    })

    it('IoButton normal size', () => {
        let wrapper = mount(IoButton, {
            propsData: {
                size: 'big'
            }
        });
        let vm = wrapper.vm;
        let div = vm.$el
        let classList = div.classList
        expect(classList[0].trim().toLowerCase()).to.eq('io-button')
        expect(classList[2].trim().toLowerCase()).to.eq('size-big')
        expect(classList[1].trim().toLowerCase()).to.eq('io-button-default')
    })
})

describe('IoButton icon', () => {
    it('IoButton icon', () => {
        let wrapper = mount(IoButton, {
            propsData: {
                icon: 'home'
            },
            stubs: {IoIcon: IoIcon}
        });
        let vm = wrapper.vm;
        let {classList: [first, second]} = vm.$el
        expect(first.trim().toLowerCase()).to.eq('io-button')
        expect(second.trim().toLowerCase()).to.eq('io-button-default')

        let iconDiv = vm.$el.firstElementChild
        let iconDivTagName = iconDiv.tagName
        let iconDivClassName = iconDiv.className
        expect(iconDivTagName.trim().toLowerCase()).to.eq('div')
        expect(iconDivClassName.trim().toLowerCase()).to.eq('io-icon')

        let svg = iconDiv.firstElementChild
        let svgTagName = svg.tagName
        let svgClassList = svg.classList
        let style = svg.getAttribute("style")
        expect(svgTagName.trim().toLowerCase()).to.eq('svg')
        expect(svgClassList[0].trim().toLowerCase()).to.eq('io-icon-home')
        expect(style).to.eq('fill: rgb(0, 0, 0);');
    })

    it('IoButton icon', () => {
        let wrapper = mount(IoButton, {
            propsData: {
                icon: 'home',
                disabled: true
            },
            stubs: {IoIcon: IoIcon}
        });
        let vm = wrapper.vm;
        let iconDiv = vm.$el.firstElementChild
        let svg = iconDiv.firstElementChild
        let svgTagName = svg.tagName
        let svgClassList = svg.classList
        let style = svg.getAttribute("style")
        expect(svgTagName.trim().toLowerCase()).to.eq('svg')
        expect(svgClassList[0].trim().toLowerCase()).to.eq('io-icon-home')
        expect(style).to.eq('fill: rgb(191, 191, 191);');
    })

    it('IoButton icon', () => {
        let wrapper = mount(IoButton, {
            propsData: {
                icon: 'home',
                disabled: true,
                type: 'warning'
            },
            stubs: {IoIcon: IoIcon}
        });
        let vm = wrapper.vm;
        let iconDiv = vm.$el.firstElementChild
        let svg = iconDiv.firstElementChild
        let svgTagName = svg.tagName
        let svgClassList = svg.classList
        let style = svg.getAttribute("style")
        expect(svgTagName.trim().toLowerCase()).to.eq('svg')
        expect(svgClassList[0].trim().toLowerCase()).to.eq('io-icon-home')
        expect(style).to.eq('fill: rgb(255, 255, 255);');
    })
})
