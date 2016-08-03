/**
 * Created by Saniac on 2016/8/1.
 */
var IMGLIST = [
    ['images/a.png',
    'images/b.jpg',
    'images/c.jpg',
    'images/d.jpg',
    'images/e.jpg',
    'images/f.jpg',
    'images/g.jpg',
    'images/h.jpg',
    'images/i.jpg',
    'images/j.jpg',
    'images/k.jpg',
    'images/l.jpg'],
    [   'images/g.jpg',
        'images/h.jpg',
        'images/i.jpg',
        'images/j.jpg',
        'images/k.jpg',
        'images/l.jpg',
        'images/m.jpg',
        'images/n.jpg',
        'images/o.png',
        'images/p.jpg',
        'images/q.jpg',
        'images/r.jpg'
    ],[ 'images/m.jpg',
        'images/n.jpg',
        'images/o.png',
        'images/p.jpg',
        'images/q.jpg',
        'images/r.jpg',
        'images/i.jpg',
        'images/b.jpg',
    ],[
        'images/j.jpg',
        'images/k.jpg',
        'images/l.jpg',
        'images/m.jpg',
        'images/n.jpg',
        'images/o.png',
    ]
];

$(document).ready(function () {
    var ss = document.getElementsByClassName('longSlideShow');
    for(var i=0;i<ss.length;i++){
        var childs = ss[i].childNodes;
        var li=$(childs).children('li');
        for(var j=0;j<li.length;j++){
            $(li[j]).css('background-image','url(' + IMGLIST[i][j%(li.length/2)] + ')');
        }
    }
});