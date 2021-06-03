const fs = require("fs")
const p = require("path")

const libPath = p.join(__dirname, "../", "lib")
const srcPath = p.join(__dirname, "../")

console.log(libPath)

console.log(fs.readdirSync(libPath))

const categories = fs.readdirSync(libPath)

const utils = categories.map((category) => {
  const filenamesEachCategory = fs.readdirSync(p.join(libPath, category))
  return {
    categoryName: category,
    methods: filenamesEachCategory.map((filename) => {
      return {
        filename,
        content: fs.readFileSync(p.join(libPath, category, filename)).toString().trim()
      }
    })
  }
})

const utilText = JSON.stringify(utils)

fs.writeFileSync(p.join(srcPath, "utils.ts"), `export default ${utilText}`)

