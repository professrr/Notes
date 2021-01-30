import {createStore} from 'vuex'
import Note from './modules/Note'
import createPersistedState from "vuex-persistedstate"

export default createStore({
    modules: {
        Note
    },
    plugins: [createPersistedState()],
})