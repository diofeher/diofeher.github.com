---
layout: post
title: Explicando iterators em python 
tags: [python, iterator]
comments: true
---


Ano passado o arthursribeiro perguntou no canal da #ufcg da freenode como funcionava o yield do python. Me lembrei quando eu estava iniciando que também tive essa dúvida e tenho certeza que é muito comum entre iniciantes então estou aqui explicando.

Iterables
-------------

O primeiro passo para se entender o yield é entender o que são iterables. Um objeto é iterable quando você pode percorrer seus valores usando um “for valor in objeto”.

<pre lang="python"><code class="language-python">
>>> lista = ['d', 'i', 'o', 'f', 'e', 'h', 'e', 'r']
>>> for letra in lista:
...   print letra
...
d
i
o
f
e
h
e
r
</code></pre>

Outra maneira de criar iterables é usando list comprehension:

<pre lang="python"><code class="language-python">
lista = [letra for letra in "diofeher"]
</code></pre>

Geralmente para ser iterable, o objeto precisa ter implementado o método __iter__. Uma regra a essa exceção é a string, que não tem esse método mágico, mas que pode iterada usando seu __getitem__. Uma boa maneira de saber se um objeto é iterável ou não:

<pre lang="python"><code class="language-python">
>>> iter([1,2,3])
<listiterator object at 0x1004cdc50>
>>> iter('diofeher')
<iterator object at 0x1004cdcd0>
>>> iter(2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not iterable
>>> iter(False)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'bool' object is not iterable
>>> iter(None)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'NoneType' object is not iterable
</code></pre>

Se o objeto for iterável, ele é retornado. Se não, a exceção TypeError é levantada.

Iterables são úteis porque você pode iterá-los quantas vezes quiser. Uma desvantagem do seu uso é que ele mantém TODA a lista em memória, o que pode não ser útil para grandes listas. É aí que entram os generators.

Generators
-----------

Generators são iterables, a diferença é que seus valores são lidos apenas quando é necessário. Pode-se dizer que iterables normais tem eager evalution e generators tem lazy evalution.

<pre lang="python"><code class="language-python">
>>> gerador = (letra for letra in "diofeher")
>>> gerador.next()
'd'
>>> gerador.next()
'i'
>>> for letra in gerador:
...   print letra
...
o
f
e
h
e
r
>>> gerador.next()
Traceback (most recent call last):
  File "", line 1, in
StopIteration
</code></pre>

No exemplo acima usei o generator expression para criar o generator. Você pode percorrer pelos valores de um generator usando o método next(); Ele vai retornar cada valor do generator por vez, até chegar no final; Chegando no fim, se você tenta usar o next(), ele vai levantar uma exceção chamada StopIteration.

Com generators e iterables explicados, posso chegar na dúvida inicial: yield.

Yield
------

Yield funciona mais ou menos como um return, com a diferença que ele retorna um generator.

<pre lang="python"><code class="language-python">
>>> def gerador():
...   for i in range(10):
...     yield i * 2
... 
>>> gera = gerador()
>>> print gera
<generator object gerador at 0x1004c8960>
>>> gera.next()
0
>>> gera.next()
2
>>> for i in gera:
...   print i
... 
4
6
8
10
12
14
16
18
</code></pre>

Entendendo como funciona por debaixo dos panos (a parte difícil):
Quando você usa a função desse jeito, o código da função não é rodado; O que é retornado é o objeto generator, para o código ser executado somente quando você chama next() ou usa um for no objeto.
Na primeira vez que a sua função for rodada, ela vai rodar do começo e parar até tocar no primeiro yield. Após tocar no primeiro yield, ela vai continuar do ponto que foi parado até achar o próximo yield. Quando não for achado um yield, a exceção StopIteration é lançada. Essa explicação fica melhor vista na função abaixo:

<pre lang="python"><code class="language-python">
>>> def test():
...   yield 1
...   for i in range(3):
...     yield i
... 
>>> testing = test()
>>> testing.next()
1
>>> testing.next()
0
>>> testing.next()
1
>>> testing.next()
2
>>> testing.next()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration
</code></pre>

Referência usada: http://stackoverflow.com/a/231855/914874