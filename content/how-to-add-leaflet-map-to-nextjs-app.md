---
author_name: Victor Ribero
author_img_src: /public/img/victor-ribero-avatar.jpg
title: How to add a Leaflet map to your NextJS application
slug: how-to-add-leaflet-map-to-nextjs-app
description: Learn easily how to add a beautiful map to your react application step by step
date: 2020-05-14
tags: [technical, javascript]
---

If you're building a product or a service and you need to show some locations, you might consider using a map instead of a boring list. I prefer the map UI over the list because:

1. It shows the data in a visual way that makes it easier to understand
2. It gives Additional context (when showing locations in a map, you show how they are located from each other)
3. Better user experiencie

## What is leaflet

Leaftlet is a free and an open-source JavaScript library for mobile-friendly interactive maps mainainted by the community.

Leaflet is designed with simplicity, performance and usability in mind. It works efficiently across all major desktop and mobile platforms, can be extended with lots of plugins, so it's customizable.


## Prepare your environment to use the map

As you might now, [NextJS](https://nextjs.org/) is framework on top of ReactJS. [ReactJS](https://reactjs.org/) is a web-component javascript library to create user interfaces. To use Leafleft in this ecosystem, I recommend installing the needed packages instead of including it to your site using a CDN (link to download the same piece of javascript).

The package `leaflet` is mandatory in order to include the library. To install it we can run `npm i --save leaflet`.

I recommend installing too the `react-leaflet` package because it provides an abstraction of Leaflet as ⚛️ React components. It doesn't substitute the original one, so we will have to have both installed. To install the `react-leaflet` package run `npm i --save react-leaflet`.

The last but not least, you need to [include the leaflet styles in your application](https://react-leaflet.js.org/docs/en/installation) or it won't work.


## What are the requirements to make the map work?

The [react-leaflet library provides us some components](https://react-leaflet.js.org/docs/en/components) that we will use to include the map into our NextJS application. The most used are:

1. `<Map>` it renders the map.
2. `<Tile>` allows us to load one design for the map or another one.
3. `<Marker>` adds a marker in a given location. We load lots of them.

There are a few requirements you need to do in order to use a map:

1. The styles should be included in the application.
2. The map must be wrapped with an element that has a explicit height. You can use `<div>`, `<section>`, etc.
3. A center and zoom must be specified.

## How to include the map

### Create a wrapper

First, you need to create a `<div>` with an *id* and explicit height because if not, the map won't work. Let's say 400px.

<!-- image wrapper with explicit height created -->

### Import the packages needed

Import the Components from the `react-leaflet` library.

<!-- // image import package -->

### Use the Map component

Now that we have imported the component from the library, we are ready to use it. Take into account the [requirements of the Map component](https://react-leaflet.js.org/docs/en/components#map) that are explained in the documentation.

#### Pass some data to the map

In order to make it work, we need to provide the center and zoom props. Center is the point where the map will be centered, and the zoom is the number that expresses how far or close we are from the location (we could decribe it as the elevation or the height from where the map is seen).

<!-- image of map usage -->

#### Include a Tile component

To display a Leaflet map, you need to specify a Tile. A tile more os less the UI of your map.

Here there is a [large list of leaflet providers](https://leaflet-extras.github.io/leaflet-providers/preview/) you can use. As you can see in the images below, there are many.

// image maps

As you can see, you have a list of many UI on the right. IF you click in one, the UI will change and the values shown in the popup will change as well.

To include a specific tile or UI into you map, you just need to copy its link and use it as the following:

// image using the tile

If you try to run the application now, you'll encounter the folling error:

// image of error

This error happens because the Leaflet library is executed right when it's downloaded and it depends on the window object that is a host objet of a client environment (it's only available in the browsers and not in the server).

What we've done is enough for a SPA built with react, but NextJS execute the code in a server environment, so we need a workaround. A good workaround would be to load the library only in client environment and then, render the component. This is done by a package caled `react-leaflet-universal`.

This `react-leaflet-universal` uses the same API of `react-leaflet`, so we have only to change the import package.

// image import changed

And now our map is working

// image map working

### Include markers

Now that your map is rendered, you might want to add points to your map so show some places. The package `react-leaflet-universal` uses the same components of `react-leaflet`. This one, exposes some objects such as `Marker` or`Popup`.

To include ¡a marker, we need to pass to the component the coordinates of the point we want to highlight like in the image below.

// image of how to use the Marker

We can also show information when clicking on this marker using the `Popup` component as a children of the `Marker`. 

// image usage of the popup

The image below shows the final result of implements a Leaflet map in NextJS with markers and a popup that shows information of each marker

// image



