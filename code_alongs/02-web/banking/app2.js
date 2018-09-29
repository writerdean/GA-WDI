var accounts = [
{
name: "savings",
balance: "10"
},
{
name: "checking",
balance: "250"
}
]

// getting elements for balance for each account
var balanceSavings = document.querySelector(".balance-savings")
var balanceChecking = document.querySelector(".balance-checking")

// getting element for the background for each account
var backgroundSavings = document.querySelector(".savings")
var backgroundChecking = document.querySelector(".checking")

var a0 = accounts[0] // savings
var a1 = accounts[1] // checking

// setting initial display for balance
balanceSavings.textContent = a0.balance
balanceChecking.textContent = a1.balance

// getting buttons for each account
var depositSavings = document.querySelector(".deposit-savings")
var depositChecking = document.querySelector(".deposit-checking")
var withdrawSavings = document.querySelector(".withdraw-savings")
var withdrawChecking = document.querySelector(".withdraw-checking")

// getting input amount for each account box

var inputAmountChecking = document.querySelector(".amountChecking") // string
var inputAmountSavings = document.querySelector(".amountSavings") // this is a string


// handling deposit to account
var handleDepositToSaving = function() {
    depositToAccount(a0, inputAmountSavings.value)
    inputAmountSavings.value = ''
}
var handleDepositToChecking = function() {
    depositToAccount(a1, inputAmountChecking.value)
    inputAmountChecking.value = ''
}

// handle withdrawing from account
var handleWithdrawFromSavings = function() {
    withdrawFromAccount(a0, a1, inputAmountSavings.value)
    inputAmountSavings.value = ''
}
var handleWithdrawFromChecking = function() {
    withdrawFromAccount(a1, a0, inputAmountChecking.value)
    inputAmountChecking.value = ''
}

// update account balances
var updateBalance = function() {
    balanceSavings.textContent = a0.balance
    balanceChecking.textContent = a1.balance
    
    if(a0.balance > Number(0)) {
        backgroundSavings.style.backgroundColor = "gray"                   
        } else {
            backgroundSavings.style.backgroundColor = "red" 
        }
    if(a1.balance > 0) {
        backgroundChecking.style.backgroundColor = "gray"                   
        } else {
            backgroundChecking.style.backgroundColor = "red" 
        }
}


var depositToAccount = function(depositAccount, amount) {
    console.log('Previous balance: ' + depositAccount.balance)
    var result = Number(amount) + Number(depositAccount.balance);
    console.log('Account deposit of ' + amount + '.  New balance is:  ' + result)
    depositAccount.balance = result;
    console.log(depositAccount.balance)
    updateBalance();

}

var withdrawFromAccount = function(withdrawAccount, linkedAccount, amount) {
    console.log('Account withdrawal ' + amount)
    var remainder = Number(withdrawAccount.balance) - Number(amount)

    if( remainder >= 0) {

        console.log('Account withdrawal.  New blanace:  ' + remainder)
        withdrawAccount.balance = remainder;
        updateBalance();

    } else {

        var overdrawn = Math.abs(remainder);

        if  (  overdrawn  <= Number(linkedAccount.balance) ) {
            console.log('Do you want to transfer money?')
            linkedAccount.balance = Number(linkedAccount.balance) - overdrawn
            console.log('New overdraft account balance: ' + linkedAccount.balance)
            withdrawAccount.balance = Number(0);
            console.log('Original account balance is now: ' + withdrawAccount.balance)

            updateBalance();

        } else {
            console.log('Sorry, not enough funds available.')

        }

    }
}


withdrawSavings.addEventListener('click', handleWithdrawFromSavings)
withdrawChecking.addEventListener('click', handleWithdrawFromChecking)
depositSavings.addEventListener('click', handleDepositToSaving)
depositChecking.addEventListener('click', handleDepositToChecking)