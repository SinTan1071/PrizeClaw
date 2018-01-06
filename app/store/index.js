import vue from 'vue'
import vuex from 'vuex'
import * as types from './types'
vue.use(vuex)

export default new vuex.Store({
    state: {
        screen: {
            screenWidth: document.body.offsetWidth,
            screenHeight: document.body.offsetHeight,
        },

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
            localStorage.removeItem('member_login');
        },
        UPDATE(state, value) {
            state.dynamicValidateForm = value
        },
        //重设网页可见区域宽和网页可见区域高
        onResizeSetting: (state, data) => {
            state.screen.screenWidth = data.screenWidth;
            state.screen.screenHeight = data.screenHeight;
        }
    },
    actions: {

    },
    modules: {

    },
})