class Bill{
    constructor(value, amount){
        this.value = value
        this.amount = amount
    }
}

var register = [];
var given = [];
register.push( new Bill(50, 3) )
register.push( new Bill(20, 2) )
register.push( new Bill(10, 2) )

var cash = 0
var div = 0
var papers = 0

var button = document.getElementById("extract")
document.addEventListener("click", givenCash)
var result = document.getElementById("result")

function givenCash(){
    var t = document.getElementById("money")
    cash = parseInt(t.value)
    for (var bi of register){
        if (cash > 0){
            div = Math.floor( cash / bi.value )
            if (div > bi.amount){
                papers = bi.amount
            } else {
                papers = div
            }
            given.push( new Bill(bi.value, papers))
            cash = cash - (bi.value * papers)
        } 
    }
    if (cash > 0){
        result.innerHTML ="no money"
    } else {
        for (var g of given){
            if (g.amount > 0){
                result.innerHTML += g.amount + " bills of $" + g.value + "<br />"
            }
        }
    }
}

