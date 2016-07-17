/**
 * Created by Saniac on 2016/7/18.
 */
define(['jquery'],function ($) {
    function ScrollTo(opts) {
        this.opt = $.extend({},ScrollTo.DEFAULTS,opts);
        this.$el = $('html,body');
    }
    ScrollTo.prototype.move = function () {
        console.log(this);
        this.$el.animate({
            scrollTop:this.opt.speed
        },this.opt.speed);
    }
    ScrollTo.prototype.go = function () {
        this.$el.scrollTop(this.opt.speed);
    }
    ScrollTo.DEFAULTS = {
        dest:0,
        speed:800
    }
    return {
        scrollTo:ScrollTo
    }
});