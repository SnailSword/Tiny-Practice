/**
 * Created by Saniac on 2016/8/4.
 */
var CHAR = {
    'left':['(','[','{'],
    'right':[')',']','}']
};
function isMatchingPair(str) {
    var arr = str.split('');
    var len = arr.length;
    var stack = [];
    var index;
    for(var i=0;i<len;i++){
        index = CHAR.right.indexOf(arr[i]);
        if(index>-1){
            if(CHAR.left[index]===stack[stack.length-1]){
                stack.pop();
            }
            else{
                return false;
            }
        }
        else if(CHAR.left.indexOf(arr[i])!=-1){
            stack.push(arr[i]);
        }
    }
    return stack.length===0;
}

a = isMatchingPair('(dwe[dwe)dwe]') ; // return false
b = isMatchingPair('({gs[fdsgf]})');  // return true
console.log(a,b);