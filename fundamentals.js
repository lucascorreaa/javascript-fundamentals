// console

console.log('Esse é o método log')
console.warn('Esse é o ambiente de desenvolvimento')
console.error('Esse é seu erro')
console.table('Coloque um array aqui')
console.info('Essa é uma informação')
// console.clear()

// variáveis

var banana = 10
let maçã = 15
const uva = 20

console.log(banana)
console.log(maçã)
console.log(uva)

// Tipos de dados   

const name = 'Lucas do Espirito Santo'
let qtd = 5
const isApproved = false
let lastNamee = null
let age 
const languages = ['JavaScript', 'PHP', 'Python']
const user = { email: 'lcs@teste.com', password: 'teste123', name: 'lucas'}

console.log(name)
console.log(typeof name)

let num = [1, 2, 3, 4 , 5]
console.table(num)
console.log(num[1])

let obj = [
    {id: 'g', name: 'greice', age: 45},
    {id: 'j', name: 'jose', age: 15}
]

// métodos de string

const fullName = 'Lucas Espirito Santo Correa'

console.log(fullName, 'nome completo')

const stringToArray = fullName.split(' ') 

console.table(stringToArray)

const firstName = stringToArray[0]

const lastName = stringToArray[3]

let userName = `Bem vindo, ${firstName} ${lastName}`

console.log(userName)

// minusculo
console.log(fullName.toLowerCase())

//maiusculo
console.log(fullName.toUpperCase())

// traz o tamanho da string
const teacherName = 'lucas'
console.log(teacherName.length)

// retorna o indice do valor mensionado
console.log(fullName.indexOf('Espirito'))

// busca um palavra através do indice que voce selecionou (inicio, fim)
console.log(fullName.slice(6, 14))

// métodos de array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length, 'array')
console.log(list[4])

list[5] = 'f'
console.log(list)

list.push('g')
console.log(list, 'push')

console.log(list[list.length -1], 'aqui')

list.pop()
console.log(list)

