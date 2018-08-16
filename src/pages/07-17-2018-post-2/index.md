---
path: '/blog/posts/2'
date: '07-18-2018'
title: 'Window Navigator'
author: 'Raul Martinez'
image: '/static/Javascript.png'
desc: 'Conditionally reseting all of the input values on a form...'
---

Recently, I was tasked with reseting all of the input values on a form. Here is the situation.

There is a form on one page, and once the form is submitted the user is navigated to a "Thank you" page. If the user were to click the 'Back' button on their browser. All of their information was still there, but the goal was to have a fresh form with no inputs filled out.

After doing some research I came across [Perfomance Navigation](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation) on the Mozilla Web Docs. This allowed me to implement a solution onto the page to check if the user had clicked the 'Back' button.


```javascript
if (window.performance.navigation.type === 2) {
  document.querySelector('#idOfForm').reset()
}
```
