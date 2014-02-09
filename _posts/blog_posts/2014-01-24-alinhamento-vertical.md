---
layout: post
title: Alinhamento vertical
tags: [css3, front-end]
comments: true
---
Um problema recorrente quando se desenvolve layouts é o alinhamento vertical. Existem diversas opções disponíveis, usando pseudo-elementos, inserir outro elemento depois, usar javascript... Uma solução elegante pra esse problema utiliza a propriedade transform do CSS3.

<pre lang="html">
<code class="language-css">
.pai {
	background-color:red;
	height:200px;
	width:200px;
}
.filho {
	background:yellow;
	width:50px;
	height:50px;
	margin:auto;
}
<div class="pai">
	<div class="filho">filho</div>
</div>
</code>
</pre>

<div class="pai">
	<div class="filho"></div>
</div>

Utilizaremos o html/css acima pra essa solução. 

Primeiramente adicionaremos position: relative para a posição usar o pai como referência. Colocaremos também top:50% para o elemento ir para o centro do pai.

<div class="pai">
	<div class="filho filho1"></div>
</div>

Como visto no exemplo acima, o elemento não fica exatamente centralizado, pois o top coloca usando a parte superior do filho como base. Isso significa que ao usarmos top, estaremos no centro do elemento pai, porém com a parte superior do elemento filho. É aí que entra o pulo do gato!

Quando se utiliza valores normais (px, em, etc) no CSS3 transform, o elemento filho é baseado no valor do elemento pai. Porém quando utiliza-se porcentagens, o valor baseado é do próprio elemento filho! Com isso adicionaremos transform:translateY(-50%) (deve-se colocar os prefixos dos browsers também, -moz, -webkit) e o elemento vai ser translatado em seu próprio eixo 50% para cima, ficando exatamente no local desejado.

<div class="pai">
	<div class="filho filho1 filho2"></div>
</div>

O único contra dessa solução é que não funciona no IE8 e anteriores (seria isso realmente um contra? :) como pode ser visto no [http://caniuse.com/transforms2d](canIuseit.com).

Segue o código final:
<pre lang="html">
<code class="language-css">
.pai {
	background-color:red;
	height:200px;
	width:200px;
}
.filho {
	background:yellow;
	width:50px;
	height:50px;
	margin:auto;
	position:relative;
	top:50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
    transform: translateY(-50%);
}

<div class="pai">
	<div class="filho"></div>
</div>
</code>
</pre>