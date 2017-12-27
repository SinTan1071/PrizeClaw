/**
 * typing 服务
 *
 * 与文字相关的方法集合
 *
 */
const merge = require('webpack-merge');
const layer = require('layer.mobile');

module.exports = {
    /**
     * 显示正在加载样式
     *
     * @param {Bool|true} shadeClose 是否点击隐藏
     * @returns {Number} index 弹窗的序号，可用于手动关闭弹窗
     */
    loading: function (shadeClose) {

        shadeClose = shadeClose || false;

        return layer.open({
            type: 2,
            shadeClose: shadeClose
        });
    },
    /**
     * 消息提示
     *
     * @param {String} message 消息内容
     * @returns {Number} index 弹窗的序号，可用于手动关闭弹窗
     */
    tip: function (message) {
        return layer.open({
            content: message,
            time: 2,
        });
    },
    /**
     * 提示消息，带标题和按钮
     *
     * @param {String} message 提示信息内容
     * @param {String} option 配置信息，可覆盖默认配置
     * @returns {Number} index 弹窗的序号，可用于手动关闭弹窗
     */
    message: function (message, option) {

        return layer.open(merge({
            title: '提示',
            content: message,
            btn: ['确定', '取消']
        }, option));
    },
    /**
     * 打印警告消息
     *
     * @param {String} message
     * @param {String} option 配置信息，可覆盖默认配置
     * @returns {Number} index 弹窗的序号，可用于手动关闭弹窗
     */
    warning: function (message, option) {

        return layer.open(merge({
            content: message,
            btn: ['确定'],
        }, option));

    },
    /**
     * 打印错误消息
     *
     * @param {String} message message
     * @returns {Number} index 弹窗的序号，可用于手动关闭弹窗
     */
    error: function (message) {

        return this.tip('错误： ' + message);
    },
    /**
     * 手动关闭弹窗
     *
     * @param {Number} index 要被关闭的弹窗的序号，如果序号小于 0 则关闭全部弹窗
     */
    close: function (index) {
        index >= 0 ? layer.close(index) : layer.closeAll();
    }
};