// import '../../package/main.css'
import './public/table.scss'
import '../../package/main.css'

export default ({Vue}) => {
    import('../../package/io-ui').then(module => {
        Vue.use(module.default)
    })
}
