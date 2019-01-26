---
path: '/blog/posts/5'
title: 'Coding Problem #1'
author: 'Raul Martinez'
image: 'Javascript.png'
desc: ''
---

I just came across a service that providing coding problems for practice. Below is the first problem I received, I am not claiming this to be the best solution in any means. The solution provided below was the first solution I was able to hack together to pass the test.

Question:  
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17

```javascript
const addSum = (array, num) => {
  const obj = {}
  for (i = 0; i < array.length; i++) {
    const cv = array[i]
    if (i > 0) {
      for (const ite in obj) {
        const total = obj[ite] + cv
        if (total === num) {
          console.log('true')
          return true
        }
      }
    }
    obj[i] = cv
  }
}

const a = [10, 15, 3, 7]
addSum(a, 17)
```
