## 快速安装
### 注：
- 在webpack.config.js中先修改projectRoot的位置，为当前项目所在路径；因为引用的vux组件路径有问题需要重新定位，（暂时还没有自动获取文件路径，需要手动修改
）
```
module.exports = vuxLoader.merge(webpackConfig, {
    options: {
        projectRoot: '/Users/JJM/code/catch/'
    },
    plugins: ['vux-ui']
});
```

### 快速启动：
```zsh
$ npm install
$ ./run.sh
```

## 目录结构

```
├── app
│   ├── bootstrap.js       ------------- 项目启动脚本
│   ├── components         ------------- 组件存放目录
│   ├── images             ------------- 图片存放目录
│   ├── index.html         ------------- 入口文件
│   ├── pages              ------------- 页面存放目录
│   │   ├── home.vue
│   │   └── .user-account.vue
│   ├── routes.js          ------------- 路由定义文件
│   └── services           ------------- 服务存放目录
│       └── ajax.js        ------------- 网络请求服务
├── build
│   ├── env.js             ------------- 正式环境配置文件
│   ├── gulpfile.js        ------------- 开发环境 gulp 配置
│   ├── webpack.build.js   ------------- 正式环境 webpack 配置
│   └── webpack.config.js  ------------- 开发环境 webpack 配置
├── compile.sh             ------------- 项目编译脚本
├── dist                   ------------- 项目编译后存放目录
├── docker.sh              ------------- 使用Docker编译脚本
├── env.js                 ------------- 开发环境配置文件
├── package.json           ------------- 依赖包
├── run.sh                 ------------- 项目开发启动脚本
```

