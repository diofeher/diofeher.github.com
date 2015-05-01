---
layout: post
title: Setting up Zoho Apps on your Django website
tags: [django, zoho]
comments: true
---

I'm building StreetBarz for 9 months and only now I decided to setup e-mail for business. I tried Google Apps, but the cost of $5/mo per user is not attractive.

While setting up, first I had to verify that I was the owner. I've added that to my urls:

    (r'^zohoverify/verifyforzoho.html', lambda x:
    HttpResponse('response-from-the-code-generated')),

In Zoho website you will download a file, so just place the long string inside HttpResponse.


After that, I had to setup my application to send e-mails through Zoho's SMTP Server. Spent some time trying to figure out that Django default's backend doesn't work with SSL. So what you have to do is:

1) Install https://github.com/bancek/django-smtp-ssl

2) Add these lines to your settings:

    EMAIL_PORT = 465
    EMAIL_BACKEND = 'django_smtp_ssl.SSLEmailBackend'
    EMAIL_USE_SSL = True
    EMAIL_HOST = 'smtp.zoho.com'
    EMAIL_HOST_USER = 'user@streetbarz.com'
    EMAIL_HOST_PASSWORD = 'password'
    DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

Please note that DEFAULT_FROM_EMAIL should be the same as EMAIL_HOST_USER, if not, Zoho will give you a ConnectionTimeout when trying to send an e-mail.