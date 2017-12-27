/**
 * Application entry.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'//引入vuex状态管理
import title from './services/title'
import routes from './routes'
import axios from 'axios'
import * as types from './store/types'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './asset/css/my-vux.css'

Vue.use(VueRouter);
Vue.use(MintUI)

// 将axios挂载到prototype上，在组件中可以直接使用this.$ajax访问
Vue.prototype.$ajax = axios;
window.$socket = null;
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token') ) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'));
}
const router = new VueRouter({
    routes
});
//路由拦截：利用beforeEach()对路由进行判断
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem('token') ) {  // 通过获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

router.afterEach(transition => {

    if (typeof transition.meta !== 'undefined' && typeof transition.meta !== 'undefined') {
        //需要根据当前语言环境设置对应标题，中文CnTitle,英文EnTitle
        title(transition.meta.CnTitle);
    }

});

const app = new Vue({
    store,
    router
}).$mount('#app-wrapper');

export default router;