/**
 * Created by Saniac on 2016/7/17.
 */

requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

requirejs(['validata'],function (vd) {
    console.log(vd.isEqual(1,2));
});