// /* return without variable  */

function shopping(shirt,shoes){
    console.log (shirt,shoes);
  var sum = shirt + shoes;
  console.log(sum);
  return sum;
}
var price = shopping(200,500);
console.log (price);

// return with variable

function bringMangoes(money){
    var price = 30;
    var quantity = money/price;
    return quantity;
}
var cost = bringMangoes(600);
console.log(cost);