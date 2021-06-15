/*
 * @Author: your name
 * @Date: 2021-06-15 17:06:14
 * @LastEditTime: 2021-06-15 17:28:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm-learning\Algorithms\Recursion\选择排序.js
 */
function SelectionSort(arr, i) {
    var len = arr.length;
    if (i == len) {
        return;
    }
    var str = "";
    if (i < len) {
        //找出第i+1个到第len个中最小的数的下标赋值给k
        var k = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[k]) {
                k = j;
            }
        }
        //如果k和i一样就不操作，否则交换，让第i始终比后面的数大
        if (k != i) {
            var temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }
    }
    console.log("数组为:")
    for (let i = 0; i < len; i++) {
        str = str + arr[i] + " ";
    }
    console.log(str);
    SelectionSort(arr, i + 1);
}
SelectionSort([2, 5, 4, 1, 3], 0)