/**
 *Created by jjm on 17/4/10.
 *
 * ajax全局配置
 *
 */
import axios from 'axios'
import router from '../bootstrap'
import * as types from '../store/types'
import store from '../store/index'
// axios 配置
axios.defaults.timeout = 5000;          //响应时间
// axios.defaults.headers.common['X-Access-Token'] =token;   //用户token
axios.defaults.headers.post['Content-Type'] = 'application/json';//配置请求头
axios.defaults.headers.post['X-App-Id'] = 'h5:1.0';      //标识客户端版本
axios.defaults.headers.get['Content-Type'] = 'application/json';//配置请求头
axios.defaults.headers.get['X-App-Id'] = 'h5:1.0';      //标识客户端版本
axios.defaults.headers.delete['Content-Type'] = 'application/json';//配置请求头
axios.defaults.headers.delete['X-App-Id'] = 'h5:1.0';      //标识客户端版本
axios.defaults.headers.put['Content-Type'] = 'application/json';//配置请求头
axios.defaults.headers.put['X-App-Id'] = 'h5:1.0';      //标识客户端版本
// axios.defaults.headers.common['X-App-Id'] = 'h5:1.0 ';
console.log(axios.defaults.headers);
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL


axios.defaults.baseURL = 'http://apidev.kong.woban.me/';
//当实例创建时设置默认配置
var instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,//请求超时的时间设定
});

//http request 拦截器
axios.interceptors.request.use((config) => {
    //发送请求之前做某件事
    if (config.method === 'post' || config.method === 'put' || config.method === 'get' || config.method === 'delete') {

        config.data = JSON.stringify(config.data);
    }
    //劫持所有Ajax请求，如果这里有一个token在本地存储里面,它将会附加到一个名为x-access-token的Header里面
    if (localStorage.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.common['X-Access-Token'] = localStorage.token;
        config.headers.common['X-App-Id'] = 'h5:1.0';
    }
    return config;
}, (error) => {
    alert('错误参数');
    return Promise.reject(error);
});

//http response 拦截器:返回状态判断（添加响应拦截器）
axios.interceptors.response.use(
    response => {
        if (response.data.code == 920) {
            store.commit(types.LOGOUT);
            // router.replace({
            //     path: 'login',
            //     query: {redirect: router.currentRoute.fullPath}
            // })
            window.location.href='http://app.kong72.com/#/login';
        }
        return response;
    },
    error => {
        if (error.response) {
            if (error.response.data.code && error.response.data.code === 500) {
                // 920 说明 token 验证失败
                // 可以直接跳转到登录页面，重新登录获取 token
                location.href = '/login'
                console.log("lallal")
            } else {
                // do something
            }
        }
        return Promise.reject(error) // 返回接口返回的错误信息
    });

