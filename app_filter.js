/*
Quando vc deve usar o filter?

Quando vc precisar obter um novo array, com uma quantidade de itens menor do que o do array original
*/
// randomNumbers = [21, 37, 62, 87, 99]
// const numbersGreaterThan37 = randomNumbers.filter((item) => {
//     return item > 37
// })

// console.log(numbersGreaterThan37);

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter((user) => {
    return user.premium
})

console.log(premiumUsers);