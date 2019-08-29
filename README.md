# Projeto Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)



***

## 1. Prefácio

A cifra de César é um dos primeiros tipos de criptografias conhecidas na história, inicialmente muito utilizada pelo imperador romano Júlio César, a fim de enviar ordens secretas para os campos de batalha.


![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A técnica da cifra de César é bastante simples de entender. Para cifrar uma mensagem, basta fazer uma substituição, onde cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Esse tipo de cifra de substituição alfabética simples, é facilmente decifrado e não oferece muita segurança na comunição,mas pode fazer parte de um sistema mais complexo de criptografia.

## 2. Resumo do projeto

Meu produto é uma plataforma online que recebe denúncias anônimas de atividades ilegais na Amazônia. Ela codifica e decodifica mensagens e mostra o resultado na parte inferior da página.
index.html contém todo o conteúdo da página, títulos, textos, inputs, etc.
index.js possui funções que guardam a informação inserida pelo usuário (textos e chave de deslocamento), além de pedir, caso o usuário coloque uma chave negativa, que ele insira um número maior que 0.
cipher.js possui as funções responsáveis por codificar e decodificar mensagens, incluindo letras maiúsculas e minúsculas.
style.css é o arquivo que dá o layout da página, background, fontes, cores, bordas e interatividade dos botões.
