/**
 * Created by Saniac on 2016/8/11.
 */
function abc(input_arrays) {
    var a = +input_arrays[0];
    var b = +input_arrays[1];
    var am = a%4;
    var bm = b%4;
    var ac = parseInt(a/4) ;
    var bc = parseInt(b/4) ;
    var co = [
        [0,0,0,0],
        [0,1,2,2],
        [0,2,4,4],
        [0,2,4,5]
    ];
    var s1 = ac*bc*8;
    var s2 = am*bc*2;
    var s3 = ac*bm*2;
    var s4 = co[am][bm];
    console.log(s1+s2+s3+s4);

}

abc([3,2]);