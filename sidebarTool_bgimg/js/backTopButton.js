/**
 * Created by Saniac on 2016/7/18.
 */
define([jquery],function ($) {
    // 按钮对象和可选参数
    function backTop(el,opts) {
        this.opts = $.extend({},backTop.DEFAULT,opts);
        this.$el = $(el);
    }
    backTop.DEFAULT={
        mode:'move',
        pos:$(window).height()
    };
});