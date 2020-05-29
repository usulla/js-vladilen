// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) =>{
//     if(err) {
//         throw err
//     }
//     console.log("GOOOd")
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, '\nHELLO Again,', err => {
//     if (err) {
//         throw err
//     }
//     console.log('файл создан')
// })
// fs.appendFile(filePath, '\nHELLO Again2,', err => {
//     if (err) {
//         throw err
//     }
//     console.log('файл создан')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    // const data = Buffer.from(content)
    // console.log(data.toString())
    console.log(content)
})