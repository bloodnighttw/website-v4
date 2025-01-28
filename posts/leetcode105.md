---
title: leetcode 105 解題思路
date: 2025-01-28
categories:
    - leetcode
---

# 前言

做完這題，把學到的東西寫上來。

[題目連結](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

這題題目是說給你一個二元樹的前序和中序，讓你建立一個二元樹。

# 思路

1. 前序的第一個數字一定是root
2. 在中序中找到root的位置，左邊是左子樹，右邊是右子樹

這邊的思路是在看完這部影片後得到的，[link](https://www.youtube.com/watch?v=twYZBfXqxE0)

這邊是看完後做的筆記。

![explain](https://r2.bntw.dev/leetcode/105.jpeg)

這個筆記是重組第一次的樣子，重組的過程可以建造root，但左子樹和右子樹的root還沒有建立，所以我們要用遞迴左右樹。

知道這兩點，我們就可以透過，我們就可以開始寫程式了。

# 解答 (javascript)

**注意，這個不是最佳解，這個解答還有很多很沒有效率的地方**

```javascript
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
 

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    const rec = (pre = preorder, ino = inorder) => {

        if(pre.length === 0)
            return null

        let rootVal = pre[0]
        let idx = 0;

        while(rootVal != ino[idx]) idx++;
        
        let lp = pre.slice(1,idx+1), li = ino.slice(0,idx);
        let rp = pre.slice(idx+1), ri = ino.slice(idx+1)

        let left = rec(lp,li), right = rec(rp,ri);
        let root = new TreeNode(pre[0],left,right)

        return root
    }

    return rec()
};
```

