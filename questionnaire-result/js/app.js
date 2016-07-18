/**
 * Created by Saniac on 2016/7/18.
 */
DATA = {
    1:{
        '西班牙巴塞罗那':4,
        '美国纽约':2,
        '意大利米兰':5,
        '希腊雅典':2,
        '中国南海':7
    },
    2:{
        '选项1':4,
        '选项2':2,
        '选项3':5,
        '选项4':2,
        '选项5':7,
        '选项6':7
    },
    3:{
        '选项1':1,
        '选项2':0,
        '选项3':1,
        '选项4':2,
        '选项5':8
    }
}

$(document).ready(function () {
    // var bcc1 = new BarCellCom();
    // bcc1.addCell();
    $('.zf-quest-list').each(
        function (index,value) {
            var bcc = new BarCellCom(DATA[index+1]);
            bcc.addCell(value);
        }
    );
});

function BarCellCom(opts) {
    this.opts = opts;
    this.sum = 0;
    for(var i in opts){
        this.sum += opts[i];
    }
    this.addCell = function (ele) {
        for(var i in opts){
            var cell = $('<div class="zf-bar-cell"></div>')
            var cellP = $('<p class="ql-option"></p>').text(i);
            // console.log((opts[i]/this.sum)*100+'%');
            // var length = $('body').width()*0.9;
            var cellB = $('<div class="ql-bar"></div>').css('width',(opts[i]/this.sum)*100+'%');
            var cellPo = '<div class="ql-points">'+ opts[i] +'票</div>';
            cell.append(cellB,cellP,cellPo);
            $(ele).append(cell);
        }
    }
}
