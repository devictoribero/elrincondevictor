const fs = require('fs')
const {resolve} = require('path')
const matter = require('gray-matter')

const CONTENT_DIR = './content'
const INPUT_PATH = resolve(CONTENT_DIR)
const OUTPUT_PATH = resolve(CONTENT_DIR)
const ENCODING = 'utf-8'

const postsFileName = getPostsFileName(INPUT_PATH)
const indexContent = getIndexContent(INPUT_PATH, postsFileName)

const content = ['index']
content.map(generateContent)


function generateContent(fileName) {
  fs.writeFile(
    `${OUTPUT_PATH}/${fileName}.json`,
    indexContent,
    ENCODING,
    afterWriteFile
  )
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

/**
 * Get an array of files and return the index content
 * @param {String} dir
 * @param {Array} postsFileName
 * @returns {String}
 */
function getIndexContent(dir, postsFileName) {
  const fileContent = {
    featured: [],
    list: [],
  }

  for (var i = 0; i < postsFileName.length; i++) {
    const file = fs.readFileSync(`${dir}/${postsFileName[i]}`, ENCODING)
    const content = matter(file)

    fileContent.list.push(content.data)
    if(content.data.isFeatured) {
      fileContent.featured.push(content.data)
    }
  }

  fileContent.list.sort(orderByUpdatedDateDesc)
  fileContent.featured.sort(orderByUpdatedDateDesc)

  return JSON.stringify(fileContent)
}

/**
 * Order by newer updated posts
 * @param {Object} postA
 * @param {Object} postB
 * @returns {Boolean}
 */
function orderByUpdatedDateDesc(postA, postB) {
  return +new Date(postA.updatedDate) < +new Date(postB.updatedDate)
}

function afterWriteFile(error){
  if (error) throw error
  console.log('The index was succesfully created!')
}