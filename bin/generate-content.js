const fs = require('fs')
const {resolve} = require('path')
const matter = require('gray-matter')

const CONTENT_DIR = './content'
const INPUT_PATH = resolve(CONTENT_DIR)
const OUTPUT_PATH = resolve(CONTENT_DIR)
const ENCODING = 'utf-8'

const postsFileName = getPostsFileName(INPUT_PATH)
const allPosts = getPostsArrayFromFileNames(postsFileName).sort(orderByUpdatedDateDesc)

console.log(allPosts)


// Is mandatory that the index should be the first one
// because is the one generates index.json and populates a global variable
const content = ['index', 'productividad']
content.map(generateContent)

function generateContent(fileName) {
  fs.writeFile(
    `${OUTPUT_PATH}/${fileName}.json`,
    getContentByFileName(fileName),
    ENCODING,
    error => afterWriteFile(error, fileName)
  )
}

function getContentByFileName(fileName){
  let fileContent;

  switch(fileName) {
    case 'index':
      fileContent = getIndex(postsFileName)
      break;
    case 'productividad':
      fileContent = getProductivity();
      break;
    default:
      fileContent = {};
      break;
  }

  return JSON.stringify(fileContent)
}

/**
 * Get an array of files and return the index content
 * @param {String} dir
 * @param {Array} postsFileName
 * @returns {String}
 */
function getIndex(postsFileName) {
  let allPosts  = getPostsArrayFromFileNames(postsFileName).sort(orderByUpdatedDateDesc)
  let featured = allPosts.filter(isFeatured).sort(orderByUpdatedDateDesc)

  const fileContent = {
    featured: featured,
    list: allPosts,
  }

  return fileContent;
}

function getPostsArrayFromFileNames(postsFileName){
  let posts = []

  for (var i = 0, length = postsFileName.length; i < length; i++) {
    const file = fs.readFileSync(`${INPUT_PATH}/${postsFileName[i]}`, ENCODING)
    const content = matter(file)
    posts.push(content.data)
  }

  return posts;
}

/**
 * Order by newer updated posts
 * @param {Object} postA
 * @param {Object} postB
 * @returns {Boolean}
 */
function orderByUpdatedDateDesc(postA, postB) {
  return +new Date(getPostDate(postA)) < +new Date(getPostDate(postB))
}

function getPostDate(post) {
  return post.updatedDate ? post.updatedDate : post.createdAt 
}

function afterWriteFile(error, fileName){
  if (error) throw error
  console.log(`✅ The ${fileName}.json was succesfully created!`)
}

function getProductivity() {
  const productivityPosts = allPosts.filter(post => hasTag(post, 'productividad'))
  return { posts: productivityPosts }
}

function isFeatured(post) {
  return post.isFeatured
}

function hasTag(post, tagName) {
  return (post.tags.filter(tag =>  tag === tagName)).length > 0
}

/**
 * Read directory and return an array of files
 * @param {String} dir
 * @returns {Array}
 */
function getPostsFileName(directory) {
  try {
    const files = fs.readdirSync(directory);
    const mdFiles = files.filter(file => file.split('.')[1] === 'md');
    return mdFiles;
  } catch (err) {
    throw err
  }
}