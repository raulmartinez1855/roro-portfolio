---
path: '/blog/posts/7'
title: 'Importance of a good dev env'
author: 'Raul Martinez'
image: 'React.png'
desc: ''
---

Recently I was challenged in a way I hope to avoid in the future. It was 5:50pm on a friday I stopped to get gas after work, I look and my phone and I see a barrage of Skype notifications. A new ticket had been created at 5:45pm that needed to go live before midnight and my project manager was counting on me to get it done.

I get back to the office around 7pm and start coding away. Two thirds of the ticket go by smoothly, no problems at all. Productivity came to screeching halt when I came across a React component that is loaded in dynamically with information from our database. The only problem is that the component does not load when no data is fed to it, and our local environment does points to a database that does not feed the component any data.

So there I was, looking at a blank white space where a component should be, freaking out that this change needs to be completed ASAP. I knew I would not be able to get the db to point to production in time, because at this point it was just me and the project manager.

I needed to make two changes to the component, one I need to make a certain value the first value to show on the component and on that first value I needed to add a HTML and CSS bubble.

The way I approached the problem was to look through the component and see if there was a function that was loading in the values in a particular order, luckily I found one that looked like it was doing just that. To make sure that it was doing that I went to our Staging Server and opened React Dev Tools to be sure and I saw an array of values that was doing just that. The value I needed was in the 3rd position in the array and I needed it to be first. Since this array was very small and I was already very nervous I decided to just remove the value from the array and add it to the beginning of the array (completely forgot that I could sort).

```
const value = 'X';
sortedArray = sortedArray.filter(i => i !== value);
sortedArray.unshift(value);
```

After that I added some inline conditional rendering for the HTML and CSS bubble in the return of the component like this:

```
const showBubble === 'X';
return(
    {showBubble && <div className="bubble">stuff</div>}
)
```

Committed to the changes staging and crossed my fingers. Thankfully my solution worked.

However, this could have been alot less stressful if my local development environment would have been setup better, I could have avoided alot of stress and heartache.
