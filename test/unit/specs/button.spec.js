import chai, { expect } from 'chai'
import spies from 'chai-spies'
import { mount } from '@vue/test-utils'
import IoButton from '../../../packages/IoButton'

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
        // expect(spy).to.have.been.called()
    })
})
