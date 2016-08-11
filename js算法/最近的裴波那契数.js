/**
 * Created by Saniac on 2016/8/6.
 */
function abc(input_arrays) {
    var a = +input_arrays[0];
    var a1 = 1;
    var a2 = 1;
    while (a>a2){
        a2 = a2+a1;
        a1 = a2-a1;
    }
    var res = Math.min(a-a1,a2-a);
    console.log(res);
}

abc(['15']);
















