/**
 * 处理页面标题显示
 */
module.exports = function (title) {

    window.document.title = title;

    setTimeout(function () {

        var iframe = document.createElement('iframe');

        iframe.style.visibility = 'hidden';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.src = '';

        iframe.onload = function () {

            setTimeout(function () {
                document.body.removeChild(iframe);
            }, 0);

        };

        document.body.appendChild(iframe);

    }, 0);

};