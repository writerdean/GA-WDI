var accounts = [
{
name: "savings",
balance: "330.00"
},
{
name: "checking",
balance: "5000.00"
}
]

var a0 = accounts[0] //savings
var a1 = accounts[1] //checking

var depositToAccount = function(depositAccount, amount) {
    console.log('Previous balance: ' + depositAccount.balance)
    var result = Number(amount) + Number(depositAccount.balance);
    console.log('Account deposit of ' + amount + '.  New balance is:  ' + result)
    depositAccount.balance = result;
    console.log(depositAccount.balance)
}

var withdrawSavings = function(amount) {

    console.log('Account withdrawal ' + amount)

    var remainder = Number(a0.balance) - Number(amount)
    

    if( remainder >= 0) {

        console.log('Account withdrawal.  New blanace:  ' + remainder)
        a0.balance = remainder;

    } else {

        var overdrawn = Math.abs(remainder);

        if  (  overdrawn  <= Number(a1.balance) ) {
            // console.log('Do you want to transfer money?')
            a1.balance = Number(a1.balance) - overdrawn
            a0.balance = Number(a0.balance) + overdrawn
            a0.balance = Number(a0.balance) - Number(amount)


        } else {
            console.log('Sorry, not enough funds available.')

        }

     }
}

console.log("start a0 balance " + a0.balance)
console.log("start a1 balance " +a1.balance)   
depositToAccount(a0, 300);
withdrawSavings(650);

console.log("end a0 balance " + a0.balance)
console.log("end a1 balance " +a1.balance)   



