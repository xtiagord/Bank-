const App = require("./App")

App.createUser("tiagodalmolin028@gmail.com", "Tiago Dalmolin")
App.createUser("fantasma1@gmail.com", "fantasma 1")
App.createUser("fantasma2@gmail.com", "fantasma 2")

App.deposit("tiagodalmolin028@gmail.com", 100)

App.transfer("tiagodalmolin028@gmail.com", "fantasma1@gmail.com", 200)


App.changeLoanFee(10)
App.takeLoan("fantasma2@gmail.com", 3000, 24)


console.table(App.findUser("tiagodalmolin028@gmail.com"))
console.table(App.findUser("tiagodalmolin028@gmail.com").account)

console.table(App.findUser("fantasma1@gmail.com"))
console.table(App.findUser("fantasma1@gmail.com").account)

console.table(App.findUser("fantasma2@gmail.com"))
console.table(App.findUser("fantasma2@gmail.com").account.loans[0].installments)