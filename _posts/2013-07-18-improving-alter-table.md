---
layout: post
title: Improving alter table runtime
tags: [performance, mysql]
comments: true
---

These days I was working on a problem that I had to do add a column in a table with more than 2 million records. First time I tried to do an ALTER TABLE... 32 minutes to run. Could you imagine in a production server with more than 10 million records?

My first attempt was to copy the table and insert records there, do the alter table and then rename the new table. But after some tests I found that would be so time consuming that it won't worth.

Then I found this [link](http://dba.stackexchange.com/questions/27328/how-large-should-be-mysql-innodb-buffer-pool-size).

If you're having this problem take a look at this link and follow the instructions and you will be safe.

I found my innodb_buffer_pool_size variable was 8MB. I increased to 1GB and I expected that elapsed time would decrease to seconds. But that's not how it works.

* 8 MB was 32 minutes
* 1GB was 8 minutes

So while the memory increased 128 times, the time decreased in 4 times. With this we can conclude that:

While memory increase in order of x**2, elapsed time will decrease in x/2.