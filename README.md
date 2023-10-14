<h1 align="center">TailwindCSS Curso</h1>
<p align=center><i align="center">Repositório contendo o conteúdo referente ao curso de TailwindCSS.</i></p>

<div align="center">

<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
<img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white">
</a>
<a href="https://tailwindcss.com/">
<img alt="TWC" src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white">
</a>

<br>
<img src="https://img.shields.io/badge/version-1.0.0-231014?" height="22" alt="Version"/>

<br>

|| [Instalação](#section-instalacao) || [Preview](#section-preview) || [Autores](#section-autores) ||

</div>

<a name="section-instalacao">

## Instalação

1. Ao abrir o Visual Studio Code, crie uma pasta vazia com o nome do projeto.

2. Abra o terminal e execute o comando `yarn add -D tailwindcss` e dps `yarn tailwindcss init`.

3. Ele criará um arquivo `.js` com o nome `tailwind.config.js`.

4. No diretório raiz, crie uma pasta com o nome `src` e dentro dela crie um arquivo com o nome `input.css`. Dentro desse arquivo `css` coloque as seguindes propiedades:
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

5. No terminal, use o comando `npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch`, para ele acompanhar as mudanças que são feitas no projeto.

6. Por fim, crie um arquivo `index.html`, no `head` coloque: `<link href="/dist/style.css" rel="stylesheet">`. Pronto, o framework está pronto para ser utilizado.

Em caso de dúvidas, acesse o a [Documentação](https://tailwindcss.com/docs/installation) do Tailwind.

<a name="section-preview">

## Preview
Projeto de uma tela de login, utilizando tudo que foi ensinado no curso.

<p align="center">

  ### White Mode
  <img src="./assets/img/whiteMode.png">
  
  ### Dark Mode
  <img src="./assets/img/darkMode.png">
</p>

<a name="section-autores">

## Autores

</a>

<a href="https://github.com/RRyanDEV/tailwindCSS-course/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=RRyanDEV/tailwindCSS-course" />
</a>
