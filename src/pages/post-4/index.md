---
path: '/blog/posts/4'
title: 'Opposite of display: none'
author: 'Raul Martinez'
image: 'Sass.png'
desc: ''
---

The other day I was having a conversation with a developer who was running into a small road block with the SASS on a page.

He had a div element that was hidden on mobile and tablet viewports. So, he put the display: none property on the element, but was unsure of how best to put it back to its default value.

So, he asked me "Whats the opposite of display: none?"

My initial response was "block" but after some consideration I realized that this would only apply to block level elements. After a quick trip to chrome dev tools and google. I revised my answer to "display: initial" which will put an element back to its initial or default display value.
