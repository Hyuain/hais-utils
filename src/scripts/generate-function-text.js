const fs = require('fs')
const p = require('path')
const chokidar = require('chokidar')

const libPath = p.join(__dirname, '../', 'lib')
const srcPath = p.join(__dirname, '../')

const isDev = process.argv[2] === 'dev'

console.log(libPath)

console.log(fs.readdirSync(libPath))

const readAndGenerate = () => {
  const categories = fs.readdirSync(libPath)

  const allUtils = categories.map((category) => {
    const filenamesEachCategory = fs.readdirSync(p.join(libPath, category))
    return {
      categoryName: category,
      utils: filenamesEachCategory.map((filename) => {
        return {
          filename,
          content: fs.readFileSync(p.join(libPath, category, filename)).toString().trim()
        }
      })
    }
  })

  const allUtilsText = JSON.stringify(allUtils)

  fs.writeFileSync(p.join(srcPath, 'utils.ts'), `export default ${allUtilsText}`)
}

readAndGenerate()

if (isDev) {
  chokidar.watch(libPath, {
    ignoreInitial: true,
  }).on('all', (event, path) => {
    console.log(event, path)
    readAndGenerate()
  })
}
