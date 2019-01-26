---
path: '/blog/posts/6'
title: 'Coding Problem #2'
author: 'Raul Martinez'
image: 'Javascript.png'
desc: ''
---

Question:  
Given an array of integers, return a new array such that each
element at index i of the new array is the product of all the
numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6]. What if you can't use division?

Back again with some coding practice. With this problem, I opted in to not using division and my thought process was
that the easiest way to solve the problem was with a nested for loop.
Although, I believe there is a faster way that I am not seeing yet.

```javascript
const a = [1, 2, 3, 4, 5]

const product = array => {
  const b = []
  for (i = 0; i < array.length; i++) {
    let n = 1
    for (j = 0; j < array.length; j++) {
      if (j !== i) {
        n *= array[j]
      }
    }
    b.push(n)
  }
  console.log(b)
  return b
}

product(a)
```
