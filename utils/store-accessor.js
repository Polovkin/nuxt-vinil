import { getModule } from 'nuxt-property-decorator'
import First from '~/store/first'
import Second from '~/store/second'

let first = null
let second = null

function initialiseStores(store) {
    first = getModule(First, store)
    second = getModule(Second, store)
}

export {
    initialiseStores,
    first,
    second,
}
