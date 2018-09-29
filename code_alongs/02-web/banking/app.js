var accounts = [
{
name: "savings",
balance: "0.00"
},
{
name: "checking",
balance: "250.00"
}
]
var balanceSavings = document.querySelector(".balance-savings")
var balanceChecking = document.querySelector(".balance-checking")

var backgroundSavings = document.querySelector(".savings")
var backgroundChecking = document.querySelector(".checking")

var a0 = accounts[0] // savings
var a1 = accounts[1] // checking

balanceSavings.textContent = a0.balance
balanceChecking.textContent = a1.balance

var depositToAccount = function(depositAccount, amount) {
    console.log('Previous balance: ' + depositAccount.balance)
    var result = Number(amount) + Number(depositAccount.balance);
    console.log('Account deposit of ' + amount + '.  New balance is:  ' + result)
    depositAccount.balance = result;
    console.log(depositAccount.balance)
    if(a0.balance > 0) {
        backgroundSavings.style.backgroundColor = "gray"                   
    }
    if(a1.balance > 0) {
        backgroundChecking.style.backgroundColor = "gray"                   
    }
}

var withdrawFromAccount = function(withdrawAccount, linkedAccount, amount) {

    console.log('Account withdrawal ' + amount)

    var remainder = Number(withdrawAccount.balance) - Number(amount)
    

    if( remainder >= 0) {

        console.log('Account withdrawal.  New blanace:  ' + remainder)
        withdrawAccount.balance = remainder;

    } else {

        var overdrawn = Math.abs(remainder);

        if  (  overdrawn  <= Number(linkedAccount.balance) ) {
            console.log('Do you want to transfer money?')
            linkedAccount.balance = Number(linkedAccount.balance) - overdrawn
            console.log('New overdraft account balance: ' + linkedAccount.balance)
            withdrawAccount.balance = Number(0);
            console.log('Original account balance is now: ' + withdrawAccount.balance)
                if(a0.balance === 0) {
                    backgroundSavings.style.backgroundColor = "red"                   
                }
                if(a1.balance === 0) {
                    backgroundChecking.style.backgroundColor = "red"                   
                }



        } else {
            console.log('Sorry, not enough funds available.')

        }

     }
}





