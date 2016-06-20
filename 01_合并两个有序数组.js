/**
 * Created by Saniac on 2016/6/20.
 */
a = [2,5,8,11];
b = [3,4,7,9,13,15,17];

~function (a, b) {
    var la = a.length;
    var j = 0;
    for(var i=0;i<la;i++){
        var cur = a.shift();
        if(j < b.length){
            while(b[j] < cur){
                j++;
            }
            b.splice(j, 0, cur);
            j++;
        }
        else {
            console.log(b.concat(a));
            return b.concat(a);
        }
    }
    console.log(b);
    return b;
}(a,b);
