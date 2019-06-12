---
author_name: Victor Ribero
author_img_src: /static/img/victor-ribero-avatar.jpg
title: Los 5 pasos que siguen los navegadores para pintar el contenido
slug: 5-pasos-navegador-renderizar-contenido
description: Todas páginas web están formadas por html, css y javascript pero, ¿Sabes como el navegador trata cada uno de ellos y que pasos sigue para saber que contenido renderizar?
img_src: /static/img/burbuja-desarollo-frontend.jpg
img_preview_src: /static/img/burbuja-desarollo-frontend-preview.jpg
createdAt: 2019-05-19
updatedAt: null
tags: [technical]
---

*El objetivo de este artículo es explicar de manera sencilla los distintos pasos que siguen los navegadores para terminar pintando el contenido de la página a partir del html, css y javascript.*

Todas páginas web están formadas por html, css y javascript e independienemente de la cantidad de cada uno de ellos, los navegadores siempre siguen el mismo proceso para conseguir tanto el contenido como la manera en que éste se ha de mostrar al usuario:

1. Generar el DOM Tree a partir del html.
2. Generar el CSSOM Tree a partir del css.
3. Combinar el DOM y CSSOM para generar el Render Tree.
4. Calcular la disposición o layout de todos los elementos.
5. Pintar los nodos del Render Tree.

Aunque el navegador sigue ese orden lógico para saber que y como renderizar, voy a explicarlo en un orden distinto que creo que para mi, es más natural.

## ¿Cómo sabe el navegador qué pintar?

Toda la información que el usuario ve a través de su pantalla y la manera en que ésta se presenta, viene dada por el *render tree*. Éste, no es más que un conjunto de nodos que tienen una información a mostrar y unos estilos atribuidos (sean los que por por defectos cada buscador le atribuye a los elementos o los que nosotros hayamos querido añadirles).

## ¿Cómo se genera el render tree?

El render tree es la combinación de dos árboles de nodos llamados DOM y CSSOM.

**El DOM es el árbol de nodos que representa la jerarquía de contenidos** de la página o aplicación web. Podríamos decir que es la fuente de información proporcionada por el html, aunque no es exactamente lo mismo. Vendrá.
* El título de la notícia
* Los distintos párrafos de un artículo
* Las secciones de la página
* Etc

Por otro lado, **el CSSOM es el árbol de nodos que indicará al navegador cómo** se debe pintar este DOM Tree (el contenido que tenemos para pintar) dadas las distintas reglas que tengamos de CSS.

Por tanto, dependiendo de **cuanta información tengamos a pintar y cuantas reglas de CSS tengamos y que tan complejas sean, más tiempo tardarán el DOM Tree y CSSOM Tree en generarse y por tanto, más tardará en generarse el Render Tree** , con lo que la carga de la página o aplicación web se verá afectada.

*No solo el tamaño del CSS afecta a la performance porque tarde más en descargarse, sino que la complejidad de las reglas afectan a que tan rápido se genera el CSSOM*

## ¿Cómo se generan los árboles DOM y CSSOM?

Los árboles DOM y CSSOM aunque se generen a partir de ficheros con extensiones distintas (.html) y (.css) respectivamente, siguen los mismos pasos a la hora de generarse:
* Convertir los bytes a carácteres.
* Pasar de carácteres a tokens.
* Generar los nodos.
* Construir el árbol

## Calcular el layout o disposición de los elementos

Supongo que alguna vez habías escuchado que añadir Javascript dentro de los tag <code><head></code> es contraproducente siempre y cuando no esté declarado como asíncrono porqué bloquea la carga de la página. Pero, ¿Sabes por qué?

Los navegadores son suficientemente inteligentes como para saber que el lenguaje Javascript tiene la potestad de poder cambiar la estética y distribución de los distintos elementos de una página web.
 
Es por eso, que el propio navegador si detecta que hay javascript en el <code><head></code>, bloquea el proceso de calcular el layout o disposición de los elementos como prevención de recalcularlo en caso que el Javascript lo haya modificado.

## Pintar

Ésta es la fase ás sencilla, pinta!




**Namasté** 🙏