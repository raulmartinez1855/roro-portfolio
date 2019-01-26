---
path: '/blog/posts/8'
title: 'Coding Problem #3'
author: 'Raul Martinez'
image: 'Javascript.png'
desc: ''
---

Create a function called shortcut to remove all the lowercase vowels in a given string.

Here is the solution that I came up with.

```
function shortcut(string) {
  const vowels = ['a','e','i','o','u'];
  vowels.forEach( i => {
    string = string.split(i).join('');
  })
  return string
}
```

Then when I looked at some the best practices I noticed a much better solution utilizing RegEx:

```
function shortcut(string) {
    return string.replace(/[aeiou]/g,'')
}
```

I really appreciate being able to see more experienced developers approach to solving these problems because it encourages me to think differently.
