---
path: '/blog/posts/9'
title: 'All in on AWS'
author: 'Raul Martinez'
image: 'AWS.png'
desc: 'fun project for Adam'
---

I had been putting off a project for a friend's(we can just call him Adam) side business(call it Adam & Co) until I earned my AWS Developer Associate certification.
Now that I earned it I thought it would be the perfect opportunity to build the project completely through AWS services.

####Project Overview
People are going into foreclosure on their homes in the county where my Adam lives. As part of the foreclosure process the owner's information is listed
on the local county website. Adam & Co need to reach out to these people, to prevent them from losing there home.

However, they do not have the time and resources to go through the site manually, and sort the records ensuring they are not reaching out to the same people twice.

####User Story
Adam & Co would like a system that could automate the process of going through the county records, find only new listings that have been published, and receive them in an email. So that Adam & Co can focus on reaching out to potential clients efficiently and effectively.

#### Solution

To solve this I was hoping I could use a Lambda function and an API, however the county did not have the most up to date technology and had no public API's. So I had to create a scraper, I chose Puppeteer which is very powerful and I have experience with. This technology choice came with a cost because with Puppeteer my node modules became too large to fit in a Lambda function, so I made a small express app and placed it in EC2.

The express server is triggered by CloudWatch every Monday morning right before Adam & Co get to the office. The app consists of three main parts:

- Scrape the site for all listings
- Insert records to DynamoDB
- Email only the new records that were able to be created using SES

####Technologies used:

- EC2
- CodeCommit
- Node.js
- Puppeteer
- CloudWatch Events
- SES
- DynamoDB

Here is a short video of the app running locally (not Headless like in production):
[![Preview of Scraper Video](https://img.youtube.com/vi/3SaNlbaX5ls/0.jpg)](https://www.youtube.com/watch?v=3SaNlbaX5ls)
