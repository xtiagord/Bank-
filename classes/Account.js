module.exports = class Account{
    #balance
   /* #deposits
    #loans
    #transfers*/
    constructor (user){
        this.owner = user
        this.#balance = 0 
        this.deposits = []
        this.loans = []
        this.transfers = []
    }


get balance(){
    return this.#balance
}

addDeposit(deposit){
    this.#balance += deposit.value
    this.deposits.push
}

addLoan (loan){
    this.#balance += loan.value
    this.loans.push(loan)
}

addTransfer(transfer){
    if (transfer.toUser.email === this.owner.email){
        this.#balance += transfer.value
    }else if (transfer.fromUser.emial === this.owner.email){
        this.#balance -= transfer.value
        this.transfers.push(transfer)
    }
}
}