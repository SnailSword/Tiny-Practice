$(document).ready(function(){
	// 首页-top-下拉链接
    $(".top-links-lf p").click(function(){
        $(".top-links-lf ul").slideToggle();
    });
    $(".top-links-lf ul li").click(function(){
        $(".top-links-lf ul").slideUp(0);
        $(".top-links-lf p").text($(this).text());
    });
    $(".top-links-lf").attr('tabindex',1);
    $(".top-links-lf").blur(function(){
        $(".top-links-lf ul").slideUp(0);
    });
})