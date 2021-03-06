import {createStore, compose} from 'redux'
import reducer from './reducers.js'

const store = createStore(
    reducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for Chrome Redux DevTools
    )
)


export default store
