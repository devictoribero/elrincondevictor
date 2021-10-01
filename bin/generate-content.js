const fs = require("fs");
const { resolve } = require("path");
const matter = require("gray-matter");

const CONTENT_DIR = "./content";
const INPUT_PATH = resolve(CONTENT_DIR);
const OUTPUT_PATH = resolve(CONTENT_DIR);
const ENCODING = "utf-8";

const articlesFileName = getArticlesFileNames(INPUT_PATH);
const allPosts = getArticlesByFilesNames(articlesFileName).sort(sortByDate);
const indexContent = JSON.stringify({ list: allPosts });
const featuredBlogPosts = allPosts.filter((blogPost) => blogPost.isFeatured);
const featuredContent = JSON.stringify({ list: featuredBlogPosts });

fs.writeFile(`${OUTPUT_PATH}/index.json`, indexContent, ENCODING, (error) =>
  afterWriteFile(error, "index.json")
);

fs.writeFile(
  `${OUTPUT_PATH}/featured-blog-posts.json`,
  featuredContent,
  ENCODING,
  (error) => afterWriteFile(error, "featured-blog-posts.json")
);

function getArticlesByFilesNames(articlesFileNames) {
  let posts = [];

  for (var i = 0, length = articlesFileNames.length; i < length; i++) {
    const file = fs.readFileSync(
      `${INPUT_PATH}/${articlesFileNames[i]}`,
      ENCODING
    );

    const content = matter(file);
    const { data } = content;
    if (!data.isPublished) {
      posts.push(data);
    }
  }

  return posts;
}

/**
 * Order by newer updated posts
 */
function sortByDate(postA, postB) {
  const dateA = new Date(`${postA.date}`);
  const dateB = new Date(`${postB.date}`);

  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }
  return 0;
}

function afterWriteFile(error, fileName) {
  if (error) throw error;
  console.log(`✅ The ${fileName} was succesfully created!`);
}

/**
 * Read directory and return an array of files
 * @param {String} dir
 * @returns {Array}
 */
function getArticlesFileNames(directory) {
  try {
    const files = fs.readdirSync(directory);
    const mdFiles = files.filter((file) => file.split(".")[1] === "md");
    return mdFiles;
  } catch (err) {
    throw err;
  }
}
