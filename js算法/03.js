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
//
// function abc(input_arrays) {
//     var a = +input_arrays[0];
//     var b = +input_arrays[1];
//     var am = a%4;
//     var bm = b%4;
//     var ac = parseInt(a/4) ;
//     var bc = parseInt(b/4) ;
//     console.log(ac,bc);
//     var z1 = ac*bc*8;
//     var z2=0,z3=0;
//     if(am==1||am==2){
//         if(bm==1||bm==2){
//             z2 = (bc*2+bm)*am;
//             z3 = (ac*2)*bm;
//         }
//         else{
//             z2= (bc*2+2)*am;
//             z3= ac*2*3;
//         }
//     }
//     console.log(z1+z2+z3);
// }
//
// abc(['4 4']);














