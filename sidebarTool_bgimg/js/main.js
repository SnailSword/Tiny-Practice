/**
 * Created by Saniac on 2016/7/17.
 */

requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

requirejs(['jquery','scrollTo'],function ($,st) {
    for(var i =1;i<100;i++){
        $('<li>item'+i+"</li>").appendTo('.longList');
    }
    var scroll = new st.scrollTo();
    $('#toTop').on('click',$.proxy(scroll.move,scroll));
    $(window).on('scroll',function () {
        checkPos($(window).height());
    });
    checkPos($(window).height());
    function checkPos(pos) {
        if($(window).scrollTop() > pos){
            $('#toTop').fadeIn();
        }
        else {
            $('#toTop').fadeOut();
        }
    }
});