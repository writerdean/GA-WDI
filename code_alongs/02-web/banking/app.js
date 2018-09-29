var accounts = [
{
name: "savings",
balance: "250.00"
},
{
name: "checking",
balance: "100.00"
}
]

var a0 = accounts[0] // savings
var a1 = accounts[1] // checking

var depositToAccount = function(depositAccount, amount) {
    console.log('Previous balance: ' + depositAccount.balance)
    var result = Number(amount) + Number(depositAccount.balance);
    console.log('Account deposit of ' + amount + '.  New balance is:  ' + result)
    depositAccount.balance = result;
    console.log(depositAccount.balance)
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
            // withdrawAccount.balance = Number(withdrawAccount.balance) + overdrawn
            // withdrawAccount.balance = Number(withdrawAccount.balance) - Number(amount)
            withdrawAccount.balance = Number(0);
            console.log('Original account balance is now: ' + withdrawAccount.balance)


        } else {
            console.log('Sorry, not enough funds available.')

        }

     }
}

console.log("start a0 balance " + a0.balance)
console.log("start a1 balance " +a1.balance)   
depositToAccount(a0, 100);
withdrawFromAccount(a1, a0, 650);

console.log("end a0 balance " + a0.balance)
console.log("end a1 balance " +a1.balance)   



