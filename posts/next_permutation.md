---
title: leetcode 31 解題思路
date: 2025-01-25
categories:
    - leetcode
---

# 前言

做完這題，研究了蠻多的東西，固生出這篇文章來紀錄我的理解。

[題目連結](https://leetcode.com/problems/next-permutation/)

# 思路

## 暴力解
首先先生成所有的排列組合，然後找到下一個排列，這樣的時間複雜度是`O(n!)`，這樣的解法時間複雜度是很恐怖的。

## 觀察

先觀察一下，

1. [1,2,`3,4`] -> [1,2,`4,3`]
2. [1,`2,4,3`] -> [1,`3,2,4`]
3. [1,3,`2,4`] -> [1,3,`4,2`]

這邊可以發現一件事情，改變的地方是局部的，而他的範圍是從最後面的數字開始找，只要找到比後面數字還更小的那個數字，該區塊就是改變的範圍。

接著讓我們往被改變的區塊看，讓我們看看是怎麼改變的。

## 觀察被改變的區塊

1. [`3,4`] -> [`4,3`]
2. [`2,4,3`] -> [`3,2,4`]
3. [`2,4`] -> [`4,2`]
4. [`1,5,1`] -> [`5,1,1`]
5. [`1,3,2`] -> [`2,1,3`]

可以發現，最左邊的那位，會與右邊比他大的數字做交換（越右邊會越先被選擇），然後再把右邊的數字做reverse。

具體做法如圖
![next_permutation](https://r2.bntw.dev/next_permutation/leetcode.jpeg)

## 例外狀況

可以發現，在遞減數列中，這個方法不會奏效，所以當我們知道這個數列是遞減的時候，我們就直接reverse整個數列。

# 解答 (javascript)
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    const lastIdx = nums.length-1;

    function swap(i,j){
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    for(let i = lastIdx;i >= 0; i--){
        if(nums[i] < nums[i+1]){
            // console.log(i)
            // swap
            let o = lastIdx;
            // find the last item that is large than nums[i]
            while(nums[o] <= nums[i]) {
                o--;
            };

            swap(i,o) 

            // reverse
            let end = lastIdx, start = i+1;
            while(start < end){
                swap(start,end)
                start++;
                end--;
            }

            return;
        }
    }
    nums.reverse()
};

```

