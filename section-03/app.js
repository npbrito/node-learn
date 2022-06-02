// Manage files
const { Console } = require('console');
const fs = require('fs');

fs.writeFileSync('notes.txt', 'teste')

const file = fs.readFileSync('notes.txt')
console.log(file)

fs.appendFileSync('./notes.txt', 'novo conteudo')

// Importing files

const notes = require('./notes')

const msg = notes.getNotes()
console.log(msg)

// Npm 
const validator = require('validator')

console.log(validator.isEmail('ex@ex.com'))