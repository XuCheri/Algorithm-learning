/*
 * @Author: your name
 * @Date: 2021-06-16 01:36:07
 * @LastEditTime: 2021-06-17 00:26:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm-learning\Algorithms\Divide and Conquer\归并排序.js
 */
var arr = [8, 4, 5, 7, 1, 3, 6, 2],
    i = 0,
    j = 7,
    temp = [];

function MergeSort(arr, temp, start, end) {
    if (start >= end) {
        return;
    }
    var len = end - start,
        mid = Math.floor(len / 2) + start,
        start1 = start,//左边部分的左下标
        end1 = mid,//左边部分的右下标
        start2 = mid + 1,//右边部分的左下标
        end2 = end;//右边部分的右下标
    MergeSort(arr, temp, start1, end1);//对左边部分进行分治排序
    MergeSort(arr, temp, start2, end2);//对右边部分再进行分治排序
    var k = start;
    while (start1 <= end1 && start2 <= end2) {
        temp[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
    }
    while (start1 <= end1) {
        temp[k++] = arr[start1++];
    }
    while (start2 <= end2) {
        temp[k++] = arr[start2++];
    }

    //合并
    for (k = start; k <= end; k++) {
        arr[k] = temp[k];
    }
}
MergeSort(arr, temp, i, j);
console.log(arr);
//1,2,3,4,5,6,7,8