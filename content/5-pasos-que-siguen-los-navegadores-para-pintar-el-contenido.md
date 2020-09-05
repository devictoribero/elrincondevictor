---
author_name: Victor Ribero
author_img_src: /static/img/victor-ribero-avatar.jpg
title: 5 pasos que siguen los navegadores para pintar el contenido
slug: 5-pasos-que-siguen-los-navegadores-para-pintar-el-contenido
description: Todas páginas web están formadas por html, css y Javascript pero, ¿Sabes como el navegador trata cada uno de ellos y que pasos sigue para saber que contenido renderizar?
img_src: /static/img/5-pasos-que-siguen-los-navegadores-para-pintar-el-contenido.jpg
img_preview_src: /static/img/5-pasos-que-siguen-los-navegadores-para-pintar-el-contenido-preview.jpg
date: 2019-06-19
tags: [tech]
---

*El objetivo de este artículo es explicar de manera sencilla los distintos pasos que siguen los navegadores para terminar pintando el contenido de la página a partir del html, css y Javascript.*

Todas páginas web están formadas por html, css y Javascript e independienemente de la cantidad de cada uno de ellos, los navegadores siempre siguen el mismo proceso para conseguir tanto el contenido como la manera en que éste se ha de mostrar al usuario:

1. Generar el árbol DOM a partir del html.
2. Generar el CSSOM Tree a partir del css.
3. Generar el Render Tree con la combinación del DOM y CSSOM
4. Calcular la disposición o layout de todos los nodos.
5. Pintar los nodos del Render Tree.

![Los distintos pasos de como el navegador renderiza el contenido siguiendo los pasos recién nombrados](/static/img/5-pasos-que-siguen-los-navegadores-para-pintar-el-contenido-1.png)

Aunque el navegador sigue ese orden lógico para saber qué y cómo renderizar, voy a explicarlo en un orden distinto que creo que para mi, es más natural.

## ¿Cómo sabe el navegador qué pintar?

Toda la información que el usuario ve a través de su pantalla y la manera en que ésta se presenta, viene dada por el *render tree*. Éste, no es más que un conjunto de nodos que tienen la información a mostrar y unos estilos atribuidos (sean los que por por defectos cada buscador le atribuye a los elementos o los que nosotros hayamos querido añadirles).

## ¿Cómo se genera el render tree?

El render tree es la combinación de dos árboles de nodos llamados DOM y CSSOM.

**El DOM es el árbol de nodos que representa los contenidos** de la página o aplicación web. Estos contenidos están determinados por el HTML y, aunque se parezca bastante al DOM, no són lo mismo.

Por otro lado, **el CSSOM es el árbol de nodos que indicará al navegador cómo** se debe pintar el DOM (el contenido que tenemos para pintar) dadas las distintas reglas que tengamos de CSS.

Por tanto, dependiendo de **cuanta información tengamos a pintar y cuantas reglas de CSS tengamos y que tan complejas sean, tomará más o menos tiempo el generar el DOM y el CSSOM Tree y por tanto, más tardará en generarse el Render Tree** , con lo que la carga de la página o aplicación web se verá afectada.


## ¿Cómo se genera el árbol DOM?

El DOM se genera a partir del fichero con extensión `.html` y sigue distintos pasos para generarse:

1. Convertir los bytes a carácteres.
2. Pasar de carácteres a tokens.
3. Generar los nodos.
4. Construir el árbol DOM.

En caso de que el navegador detecte un `<script>` no declarado como asíncrono en el `<head>` de la página, la creación del DOM será bloqueada hasta que el Javascript sea descargado y ejecutado. **Por eso es importante declarar los scripts como asíncronos**.

![Evolución temporal del proceso de generación del DOM bloqueado por un script no asíncrono](/static/img/5-pasos-que-siguen-los-navegadores-para-pintar-el-contenido-2.png)

## ¿Cómo se genera el árbol CSSOM?

El CSSOM se genera a partir del fichero con extensión `.css` y sigue exactamente los mismos pasos que el DOM para generarse:

1. Convertir los bytes a carácteres.
2. Pasar de carácteres a tokens.
3. Generar los nodos.
4. Construir el árbol CSSOM.

La construcción del DOM y del CSSOM se hacen de manera asíncrona/paralela. Eso significa que el proceso de generar el CSSOM no es bloqueante para poder generar el DOM pero tengo malas notícias, si que lo es para renderizarlo.

En caso de que el navegador detecte un `<script>` no declarado como asíncrono en el  `<head>` de la página, éste será descargado pero no ejecutado hasta que el árbol CSSOM termine de ser construido y por tanto, si el Javascript no es ejecutado, la construcción del DOM queda bloqueada.

![Evolución temporal del proceso de generación del DOM y CSSOM bloqueado por un script no asíncrono. La ejecución del script se pospone hasta que termine el CSSOM y la construcción del DOM hasta que se ejecute el Javascript](/static/img/5-pasos-que-siguen-los-navegadores-para-pintar-el-contenido-3.png)


## Calcular el layout o disposición de los nodos

La fase o paso de cálculo de la disposición de los nodos sirve para calcular que geometría tendrá cada uno de los nodos como también para saber su distribución en la pantalla respecto al orígen.

## Pintar

En esta fase el navegador convierte al árbol de representación o Render Tree en píxeles en la pantalla. 

Es curioso saber que las distintas propiedades de `CSS` cuestan más o menos de pintar dependiendo de como estén combinadas.

Supongamos el hipotético caso que se tardara 1 segundo en pintar un `box-shadow`. Si éste es combinado con una propiedad `border`, ésta, haría que tardase 1.5 segundos en vez de 1 segundo.

<hr/>

Para terminar, en caso de que quieras aprender más al respecto, te recomiendo leer [el artículo 🇬🇧 que me ha motivadoa explicar brevemente como funciona el renderizado en nuestros navegadores](https://codeburst.io/how-browsers-work-6350a4234634). Éste explica de manera extensa cada uno de los pasos que yo he explicado brevemente.



**Namasté** 🙏,