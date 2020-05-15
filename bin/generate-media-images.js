const puppeteer = require('puppeteer');
const articles = require('../content/index.json');

const articlesSlug = articles.list.map(article => article.slug);
const getUrlBySlug = slug => `https://www.elrincondevictor.com/blog/${slug}`;

let mapFromUrlToImageName = {};
articlesSlug.map(slug => {
  const imageName = slug;
  mapFromUrlToImageName[getUrlBySlug(slug)] = imageName;
});


const urls = articlesSlug.map(slug => getUrlBySlug(slug));
const imagesNamesMap = mapFromUrlToImageName;
const pathToSaveImages = 'static/img/social-media';

(async ({urls, imagesNamesMap, pathToSaveImages}) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 675});
  
  for (let index = 0; index < urls.length; index++) {
    const url = urls[index]
    console.log(`opening ${url}...`)
    await page.goto(`${url}`);
    const imageName = imagesNamesMap[url]
    const imagePath = `${pathToSaveImages}/${imageName}.png`
    console.log(`Doing screenshot for ${url}`)
    await page.screenshot({path: imagePath})
  }

  await browser.close();
})({urls, imagesNamesMap, pathToSaveImages});
