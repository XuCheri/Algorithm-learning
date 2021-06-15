/*
 * @Author: your name
 * @Date: 2021-06-16 01:03:29
 * @LastEditTime: 2021-06-16 01:35:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm-learning\Algorithms\Divide and Conquer\二分搜索.js
 */
var arr = [1, 3, 4, 5, 7, 9, 10, 22, 26],
    low = 0,
    high = arr.length + 1;
//二分搜索必须是有序数组
function BinarySearch(x, arr, low, high) {
    if (low > high) {
        console.log('无此数')
    } else {
        var mid = Math.floor((high + low) / 2);
        if (arr[mid] == x) {
            console.log(mid);
        } else if (arr[mid] < x) {
            BinarySearch(x, arr, mid + 1, high);
        } else {
            BinarySearch(x, arr, low, mid - 1);
        }

    }
}
BinarySearch(1, arr, low, high);
BinarySearch(3, arr, low, high);
BinarySearch(4, arr, low, high);
BinarySearch(5, arr, low, high);
BinarySearch(7, arr, low, high);
BinarySearch(8, arr, low, high);
BinarySearch(9, arr, low, high);
BinarySearch(10, arr, low, high);
BinarySearch(26, arr, low, high);