import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(Vuex)

import Admin from '../Admin/index'
import Interface from '../Interface/index'

const store = new Vuex.Store(require('./store'));

export default {
    data() {
        return {};
    },
    store,
    router: new VueRouter({
        mode: 'history',
        routes: [
            { path: '/admin', component: Admin },
            { path: '/interface', component: Interface }
        ]
    })
}