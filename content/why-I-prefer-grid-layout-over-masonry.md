---
author_name: Victor Ribero
author_img_src: /static/img/victor-ribero-avatar.jpg
title: Why I prefer grid layout over masonry
slug: why-I-prefer-grid-layout-over-masonry
description: Learn why it's better to use grid layout over masonry for better user experience, performance and conversions.
img_src: /static/img/why-I-prefer-grid-layout-over-masonry-1.png
createdAt: 2020-04-10
updatedAt: null
tags: [entrepreneurship, products, user experience]
---

If you have built or you're currently building a product, I'm sure you have a "list page" where there are a lot of elements. Have you ever wondered what design works best for your site? Because I'm constantly asking this to my self so I can improve the user experience and conversion for [the worldwide community for houseplant lovers](https://www.chooseyourplant.com) I'm building 👨‍💻.

At first, I chose a masonry layout because I thought it was beautiful as you can see in the image below 👇.

![A lot of plants of ChooseYourPlant shown using the masonry style](/static/img/why-I-prefer-grid-layout-over-masonry-1.png)

But was is the best option for my product? Not really. I'll tell you why I finally chose grid layout over masonry:

## Grid design follows a visual top-bottom left-right pattern

As you might know, in America and Europe we read and identify content from top-to-bottom and left-to-right. This means that we analyze the visual and text content in that order.

When a people visit your application, they will look at the top-left corner, and then they will keep going to the right. Once they finish the line, they will go to the bottom. With this is mind, do you see the problem I had with masonry?

In my honest opinion masonry makes the content more difficult to be analyzed by people from America and Europe. We can increase the easiness of this by using a grid layout because the user can follow this reading pattern easily.

![A grid layout with 2 arrows pointing from top-to-bottom and left-to-right showing our process pattern](/static/img/why-I-prefer-grid-layout-over-masonry-2.png)

## Grid design has less cognitive load which means better user experience

As you could see on the image above, masonry layout looks beautiful, but increases the cognitive load. Cognitive load is the total mental effort it takes to process information related to reasoning and decision-making.

The information shown in a masonry layout increases more the cognitive load than the grid because as commented above, the masonry design makes more difficult to read and analyze the content following a visual top-to-bottom left-to-tight pattern, and this means worse user experience.

## With a grid layout I have more control over the elements

I have more control over the elements in the list with a grid layout. This is a big deal when I think about sponsors or advertisements because I can easily control where to place them. I can assure that the 3 advertisements are always shown as I want:

1. For mobile resolutions I show the ads in the second, fourth and sixth row of the second column.
2. For tablet resolutions, I show the ads in the same rows but of the third column.
2. For desktop resolutions, I show the ads in the first, third and fifth rows of the fifth column.

![image with sponsors](/static/img/why-I-prefer-grid-layout-over-masonry-3.png)

## Grid layout has better web performance and no visual bugs for me

This attaches only to my project. To do the masonry layout, I used a `display: flex` with `column-count` along with lazy loading the images. The placeholders of the images didn't have the exact height of the image, and this was a problem because once the images were fetched, the columns of the masonry height were different and it make move images between columns some times.

This is super bad for user experience because visually things look off, and it's bad for web performance as well because it causes re-flow and re-paints.

What the hell does this mean 🤯? Re-flow is the proccess every browser do to recalculate the layout of an element or a group of elements when it changes its width, height or position (this can be hacked sometimes though), and at the end it triggers a re-paint.

These 2 process (re-flow and re-paint) are expensive and should be optimized whenever possible because if not, we could start seeing some delay in our web application or website.

![Showing how some images were moving between columns when fetching the images after scrolling](/static/img/why-I-prefer-grid-layout-over-masonry-4.gif)


## Grid layout allows me to optimize content for SEO

It is not something new that the content that is closest to the bottom of the page, is less revelant for SEO o it should be. It makes sense, doesn't it 🤔? Why would you place the most importnat content of your page at the bottom where users can't reach it easily?

With a grid layout I can easily place the sponsors or advertisements at the end of the list, and place them whenever I want with just CSS. This is relly good because I want to place my most valuable content for the users at the top of hte page, and advertisements are not.

![HTML code showing the advertisement nodes are at the end of the results list](/static/img/why-I-prefer-grid-layout-over-masonry-5.png)

## Conclusion

I think grid layout is the best option for all layout with a few exceptions because makes the content easier to read. As commented above, this means less cognitive load which is translated to better user experience. Better user experience is directly related to user happines and this, end with user retention.

**Namasté** 🙏,