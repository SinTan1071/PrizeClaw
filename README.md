# Victoria

Vue 开发脚手架, 使用 Gulp 和 Webpack 构建，提供 vue 项目开发的常规工具集和移动端开发的一些实践。

## 特性

* 使用 Vue2、Webpack2
* 支持 ES6 
* 支持 SASS
* 使用 Gulp、Webpack 构建
* 项目开发启动优化
* 页面按需加载


## 快速安装

```zsh
$ git clone https://github.com/koyeo/victoria.git victoria && cd victoria && rm -rf .git
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
│   │   └── welcome.vue
│   ├── routes.js          ------------- 路由定义文件
│   └── services           ------------- 服务存放目录
│       ├── title.js       ------------- 设置页面标题服务
│       └── ajax.js        ------------- 网络请求服务
│       └── tip.js         ------------- 消息弹框服务
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

## 环境变量

环境变量在 `env.js` 中定义，该文件默认不记录在版本控制中，需要自行创建。 `build/env.js` 文件是配置正式环境的环境变量信息，需要与 `env.js` 文件保持一致，且会记录在版本控制中。

在具体的项目中，你可能需要修改一下 `services/ajax.js` 中对应的选项。

**配置示例：**

```js
{
    app_id: 'h5:1.0.0',
    api_host: 'http://api.domain.com'
}
```

## 项目开发

**开发运行**

```
$ ./run.sh
```

**配置 Nginx 跨域**

```
server {
    listen       80;

    location / {
        proxy_pass http://api.domain.com/;   # 保留最后一个斜杠
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, DELETE, PUT, PATCH';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,X-User-Token,X-User-Phone,X-App-Id,X-UDID,X-Access-Token,Accept-Language,X-Handler-Token';
        if ($request_method = 'OPTIONS') {
            return 200;
        }
    }
}
```

## 上线编译

```
$ ./compile.sh
```

## 路由定义

页面路由在 `app/routes.js` 中定义，使用页面相对 `routes.js` 的相对路径， 使用如下语法定义，页面将按需加载。

```js
module.exports = [

    {
        title: 'Welcome',
        path: '/welcome',
        component: resolve => require.ensure(['./pages/welcome.vue'], require => require(['./pages/welcome.vue'], resolve), 'pages/welcome')
    }

];
```

## 页面定义

业务页面存放于 `app/pages` 目录中，这里注意严格区分组件（存放于 `app/components` 目录），页面统一采用小字母加中横线的命名方式，在页面逻辑不是非常复杂的情况下，尽量避免在 `app/pages` 目录中创建子目录，利于开发过程中文件引用。

**页面模板：**

```html
<template>
    <section></section>
</template>


<script>

    import title from '../services/title';

    let $query = {};  // 用于存放页面路由参数
    let $data = {};   // 用于存放页面绑定数据

    export default {

        data: () => {
            
            return $data;
        }
    }

</script>

<style lang="scss" scoped>

    section {
        background: #eee;
    }

</style>
```

`<style lang="scss" scoped></style>` 表明样式表使用 scss 语法，已经自动为当前页面样式添加作用域，避免样式污染。

## 服务

通常我们会把与业务逻辑无关的功能性操作封装成服务，默认提供了 `ajax`，`title`, `typing` 三个服务分别用于网络通信，设置页面标题，和页面提示。在 `bootstrap.js` 中将它们3个挂载成了全局变量，在页面中可以通过 `$ajax`, `$title`, `$typing` 直接使用。

根据项目的需要，可以自行改造已有服务。

### $title

设置页面标题，使用此服务可以处理微信ios版本页面标题无法改变的问题。

```js
$title('页面标题');
```

### $ajax

`$ajax` 服务支持 `get`、`post`、`delete`、`put`、四种方法，该方法依赖 `env.js`中的配置，该服务底层使用 [qwest](https://github.com/pyrsmk/qwest) 库。

```js
$ajax.get('/api/uri',{ query_id: 1 })
           .then(function(xhr,res){
               // 处理成功请求
           })
           .cache(function(e){
               // 处理请求保持或者 then 函数里有语法报错
           ));

$ajax.post('/api/uri',{ data_field: 1 })
    .then(function(xhr,res){
        // 处理成功请求
    })
    .cache(function(e){
        // 处理请求保持或者 then 函数里有语法报错
    ));
```

### $typing

`$typing` 集成了用于页面输出的服务，如消息提示，Loading 效果等，具体用法可进入 `services/typing.js` 查看。


## 问题反馈

邮箱：[im@koyeo.io](im@koyeo.io)
