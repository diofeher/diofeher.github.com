---
layout: post
title: Customizing Chardin.js
tags: [js, chardin.js, css3]
comments: true
---

<link href="/assets/css/chardinjs.css" rel="stylesheet">

I had a problem this week where I had to show instructions for a section of the site where I work on. Looking through google, I found this awesome plugin called [chardin.js](http://heelhook.github.io/chardin.js/).
We didn't like the appearence of the lines, so I went to customize a little. 
I'm gonna use this arrow:

![Instruction arrow](/assets/images/instruction-arrow.png)

Chardin.js uses pseudo-elements to create these lines that are used in their instructions. So what we have to do is change these classes in chardinjs.css file. 

<button data-intro="I love this plugin!" data-position="top" onclick="$(function() { $('body').chardinJs('start'); });"> See in action</button>

<script src="/assets/js/chardin.js" defer></script>