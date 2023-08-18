const path = require ('path')

// const custumPath = '/relatorios/jayne/relatoriosemanal.pdf'

// console.log(path.dirname(custumPath))
// console.log(path.basename(custumPath))
// console.log(path.extname(custumPath))

console.log(path.resolve('teste.txt'))

//formatar path
const midFolder = 'relatorios'
const fileName = 'arquivo.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)