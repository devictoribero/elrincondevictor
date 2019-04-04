const fs = require('fs')
const {resolve} = require('path')
const matter = require('gray-matter')

const CONTENT_DIR = './content'
const INPUT_PATH = resolve(CONTENT_DIR)
const OUTPUT_PATH = resolve(CONTENT_DIR)
const ENCODING = 'utf-8'

const list = getContent(INPUT_PATH)
const indexContent = getIndexContent(INPUT_PATH, list)

module.exports = {
  generateContent: function(fileName) {
    fs.writeFile(
      `${OUTPUT_PATH}/${fileName}.json`,
      indexContent,
      ENCODING,
      afterWriteFile
    )
  }
}

/**
 * Read directory and return an array of files
 * @param {String} dir
 * @returns {Array}
 */
function getContent(dir) {
  try {
    const files = fs.readdirSync(dir)
    const mdFiles = files.filter(file => file.split('.')[1] === 'md')
    return mdFiles
  } catch (err) {
    throw err
  }
}

/**
 * Get an array of files and return the index content
 * @param {String} dir
 * @param {Array} list
 * @returns {String}
 */
function getIndexContent(dir, list) {
  const fileContent = {
    featured: [],
    list: [],
  }

  for (var i = 0; i < list.length; i++) {
    const file = fs.readFileSync(`${dir}/${list[i]}`, ENCODING)
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
  if (err) throw err
  console.log('The index was succesfully created!')
}