/**
 * Created by Saniac on 2016/8/4.
 */
function asyncOneByOne(arr) {
    var foo = function(){}
    if(arr.length===1){arr[0](foo)}
    else {
        var lt = arr[arr.length-2];
        var lo = arr[arr.length-1];
        var arr2=arr.slice(0,-1);
        arr2[arr2.length-1] = function(foo){
        lt(function(){lo(foo)});
        }
        asyncOneByOne(arr2);
    }
}
function one(callback) {
    setTimeout(function(){
        console.log('first');
        callback();
    }, 200); }
function two(callback) {
    setTimeout(function(){console.log('second');
        callback();}, 0); }
function three(callback) {
    setTimeout(function(){console.log('third');
        callback();}, 100); }
asyncOneByOne([one, two ,three , one]);
//first
//second
//third
//first