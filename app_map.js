/* 
Quando você deve usar o map:

Quando voce precisa obter um novo array, com a mesma quantidade de itens do array original
*/

// const numbers = [1, 2, 3, 4]

// const doubleNumbers = numbers.map((item) => {
//     return item * 2
// })

// console.log(numbers, doubleNumbers)
// console.log(numbers === doubleNumbers)

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map((product => {
    if (product.price >= 30) {
        return {
            name: product.name,
            price: product.price / 2
        }
    }
    return product
}))

console.log(saleProducts)