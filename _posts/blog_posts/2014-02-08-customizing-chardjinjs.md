---
layout: post
title: Customizing Chardin.js lines
tags: [js, chardin.js, css3]
comments: true
---

<link href="/assets/css/chardinjs.css" rel="stylesheet">

I had a problem this week where I had to show instructions for a section of one site. Looking through google, I found this awesome plugin called [chardin.js](http://heelhook.github.io/chardin.js/).
We didn't like the appearence of the lines, so I went to customize a little. 
I'm gonna use this arrow in that example:

![Instruction arrow](/assets/images/instruction-arrow.png)

Chardin.js uses pseudo-elements to create these lines that are used in their instructions. So what we have to do is change them in chardinjs.css file. In `content` a dot is used to turn into a line, so we have to remove along `background-color` and instead we will add `background-image`.

<pre lang="html">
<code class="language-css">
# Change this

  .chardinjs-tooltip.chardinjs-right:before, [...] {
    content: ".";
    display: inline-block;
    background-color: white;
    height: 1px;
    overflow: hidden;
    position: absolute; }

# to

.chardinjs-tooltip.chardinjs-right:before, [...] {
    content: "";
    display: inline-block;
    height: 1px;
    overflow: hidden;
    position: absolute;
    background-image:url(../images/instruction-arrow.png);}
</code>
</pre>

Next we gonna add `width` and `height` to show the arrow, and then move its position a little higher to the top.

<pre lang="html">
<code class="language-css">
  .chardinjs-tooltip.chardinjs-top:after {
    width: 11px;
    height: 30px;
  }

  .chardinjs-tooltip.chardinjs-top:after {
    bottom: -50px;
  }
</code>
</pre>

Now it's finished, you can improve to show for every angle (left, right, bottom), in that case only top position is modified. Click the button below if you want to see the result. :)

<button data-intro="I love this plugin!" data-position="top" onclick="$(function() { $('body').chardinJs('start'); });"> See in action</button>

<script src="/assets/js/chardin.js" defer></script>