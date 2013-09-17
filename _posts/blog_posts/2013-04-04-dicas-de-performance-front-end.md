---
layout: post
title: Dicas para tornar seus sites mais rápidos
tags: [frontend, performance]
comments: true
---

Esse post foi inspirado por um livro que li sobre performance em websites. Seu nome é “High Performance Websites” e ele foi escrito por um desenvolvedor do Yahoo. Para quem é desenvolvedor de front-end sua leitura é indispensável. Resolvi publicar aqui no blog algumas dessas formas de otimização e explicar o porquê de cada.

Fazer poucas requisições HTTP
------------------------------


Pesquisas mostram que mais de 80% do carregamento de uma página é gasto no front-end. Então diminuir o número de componentes para consequentemente ter menos requisições é uma boa. Para fazer isso, utilizam-se praticamente duas técnicas, chamadas de Image Maps e CSS Sprites.

Nos Image Maps utilizamos uma imagem e mapeamos seus pontos. A imagem precisa ser contínua, como uma barra de navegação. Essa tarefa de marcar os pontos é muito suscetível a erros e é cansativa, por isso recomenda-se o uso de CSS Sprites. Com ele, juntam-se todas as imagens estáticas que compõem a estrutura do site e cada pedaço da imagem é colocado como fundo de um bloco e reposicionado usando background-position. Não se preocupe, algumas ferramentas online fazem isso para você, como o http://csssprites.com/

Comprimir usando GZIP
------------------------------

A partir do HTTP 1.1 os browser implementaram um cabeçalho chamado Accept-Encoding. Isso significa que o servidor pode mandar um arquivo comprimido com deflate ou gzip (mais popular) que o browser conseguirá descomprimir. Essa compressão geralmente diminui o tamanho do arquivo em 70%. O único contra do Gzip é usá-lo em arquivos já comprimidos, tais como mp3, jpg, pdf entre outros, pois como esses arquivos tem sua compressão própria a compressão com gzip pode até aumentar o tamanho do arquivo. Ele é recomendando principalmente em arquivos de texto plano, tais como HTML, CSS e Javascript.

Tornar o CSS e o JS externos
------------------------------

Com o CSS e o JS externos você diminui o tamanho do seu documento HTML e aumenta em duas requisições HTTP (considerando um arquivo para cada). Como isso pode ser bom, de acordo com 1 (Diminuir requisições HTTP)? Com os arquivos externos, você pode cachear-los, diminuindo consideravelmente o tempo de carregamento. Geralmente fazendo isso se tem um desempenho melhor nos sites. A única exceção para esse ponto são em páginas que geralmente são acessadas apenas uma vez (tais como páginas de home), tornando o cache inútil.

Colocar o CSS no topo
------------------------------

Quando o browser está renderizando a página, ele renderiza na ordem que vai encontrando os elementos no seu html. O maior problema de colocar o CSS no final da página é que os browsers evitam de renderizar para não ter que renderizar novamente depois que acharem o CSS. Isso vai deixar uma página branca para o usuário, até que o CSS seja renderizado.

Uma coisa que muita gente acha é que fazendo isso a página terá um tempo de carregamento mais rápido. Mas NÃO, o tempo de carregamento não é diferente. A única coisa que muda é a visualização por parte do usuário pois com o CSS no topo, ele pode navegar na página já com um feedback visual. Simples, né?

Colocar o JS no rodapé
------------------------------

A regra geral é que são feitos dois downloads paralelos por domínio quando uma página é acessada. Colocar o script no head ou no meio da página HTML vai paralisar os downloads paralelos enquanto somente o script é carregado. Somente evite colocá-los no rodapé se eles contiverem alguma função como document.write, por exemplo.

Colocar um cabeçalho Expires nos arquivos
------------------------------

Ao acessar um site pela primeira vez, seu browser faz um requisição de uma página para o servidor. O servidor processa e retorna uma página para você. O browser começa a fazer requisições dos outros arquivos que estão lá (imagens, CSS, scripts) até carregar tudo.

Na segunda vez que você acessa o site, o carregamento é bem mais rápido, certo? Isso acontece porque o browser mantêm em cache os arquivos do site e logicamente o carregamento é bem mais rápido. Mas isso ainda pode ser melhorado.

Desse modelo que citei anteriormente, o browser ainda precisa fazer um GET condicional, para saber se o arquivo mudou (geralmente essa comparação é feita com a data de última modificação, mas também pode ser feita de outros jeitos, como com E-tags) e então o servidor retorna uma requisição 304 (arquivo não modificado). Se colocar um cabeçalho Expires nos seus arquivos, o browser não precisa fazer esse GET condicional no servidor, deixando o carregamento ainda mais rápido.

Minificar arquivos JS e CSS
------------------------------

A técnica de minificar se constitui em tirar espaços desnecessários (espaços, tabulações, linhas em branco) e comentários dos arquivos, diminuindo consideravelmente seu tamanho.
Um dos que eu gosto de usar é o YUI Compressor.

Essas são somente algumas formas. Existem várias outras, e muitas estão nesse livro que citei no começo do post. Eu repito, se você é desenvolvedor web, não deixe de ler o livro. E aproveite também seu amigo Google para se aprofundar no assunto. :)