/*
 * @Author: your name
 * @Date: 2021-06-16 00:21:42
 * @LastEditTime: 2021-06-16 00:29:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm-learning\Algorithms\Recursion\全排列.js
 */
var p = [null, 1, 2, 3];
var n = p.length;
var str = "";

function perm(m) {
    str = "";
    if (m == n) {
        for (var j = 1; j <= n-1; j++) {
            str += p[j];
        }
        console.log(str);
        str = "";
    } else {
        for (var j = m; j <= n-1; j++) {
            var temp = p[j];
            p[j] = p[m];
            p[m] = temp;
            perm(m + 1);
            temp = p[j];
            p[j] = p[m];
            p[m] = temp;
        }
    }
}
perm(1);