var accounts = [
{
name: "savings",
balance: "330.00"
},
{
name: "checking",
balance: "50.00"
}
]

var a0 = accounts[0]
var a1 = accounts[1]

var depositSavings = function(amount) {
    console.log('Previous balance: ' + accounts[0].balance)
    var result = Number(amount) + Number(accounts[0].balance);
    console.log('Savings deposit of ' + amount + '.  New balance is:  ' + result)
    accounts[0].balance = result;
    console.log(accounts[0].balance)
}

var withdrawSavings = function(amount) {


    var resultingBalance = result;
    var overdraftAmount = result - Number(a0.balance);
    

    if(Number(a0.balance) - Number(amount) >= 0) {

        var result = Number(a0.balance) - Number(amount);
        console.log('Savings withdrawal.  New blanace:  ' + result)
        a0.balance = result;
    // } else {
    //     // if(resultingBalance >= a1.balance ) {
    //     //     a1.balance = a1.balance - overdraftAmount;
    //     //     a0.balance = a0.balance + overdraftAmount;

    //     // }

    //     console.log('Sorry, not enough funds available.')
    // }
}
}

// depositSavings(3.75);
// withdrawSavings(5.13)
// withdrawSavings(63.75);
// withdrawSavings(75);
withdrawSavings(53.75);



