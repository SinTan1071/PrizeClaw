import vue from 'vue'
import vuex from 'vuex'
import * as types from './types'
vue.use(vuex)

export default new vuex.Store({
    state: {

        },
    getters: {

    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            // sessionStorage.removeItem('token');
            localStorage.removeItem('member_profile');
            localStorage.removeItem('mexmber_login');
        },
        UPDATE(state, value) {
            state.dynamicValidateForm = value
        },
    },
    actions: {

    },
    modules: {

    },
})