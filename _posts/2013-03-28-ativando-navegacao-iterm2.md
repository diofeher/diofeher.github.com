---
layout: post
title: Ativando ctrl+left e ctrl+right no iterm2
tags: [terminal, iterm]
comments: true
---

Diferente do terminal da maioria das distribuições linux, o terminal padrão, o iterm e o iterm2 do Mac OS X não vem com a opção de navegar com ctrl+left e ctrl+right pelo texto que está sendo digitado. Para contornar essa situação no iterm2 você deve:

1. Clicar em iterm/preferences/bookmarks/keyboard;

2. Clicar no botão + que aparece na parte inferior;

3. Aperte ctrl+left, e selecione “Send escape sequence”. Irá aparecer um text input, digite “b”.

4. Aperte ctrl+right, e selecione “Send escape sequence”. Irá aparecer um text input, digite “f”.

Pronto, agora é possível navegar pelo texto de input no terminal. :)