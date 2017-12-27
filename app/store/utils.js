module.exports=(function () {
    //设置路由跳转的时候设置body背景色，防止样式污染
    var bodyRender=function(color) {
        document.body.style.backgroundColor=color;
    };
    var bodyRenderColor=function(url) {
        document.body.style.background=url;
    };

    return{
        bodyRender:bodyRender,
        bodyRenderColor:bodyRenderColor
    }

})()
