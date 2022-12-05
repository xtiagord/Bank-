const Installment = require("./Installment")

module.exports = class Loan{
    static #fee = 1.05

    constructor(value, installments){
        this.value = value
        this.installments = []
        for(let i = 1; i<= installments; i++){
            this.installments.push(new Installment(), 1)
        }
        this.createAt = new Date()
    }

    static get fee(){  
    return Loan.#fee
}

    static set fee(newFeePercentage){
        Loan.#fee = 1 + (newFeePercentage / 100) 
    }
}