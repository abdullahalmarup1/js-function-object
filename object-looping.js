var shoppingCart = {
    book:2,
    sunglass:5,
    pen:25,
    mouse:5,
    keyboard:2
}
console.log(shoppingCart);

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);
 
//   for loop

for (var i = 0;i< keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName]
    console .log (propertyName,propertyValue)
}



// for in loop 

for(propertyName in shoppingCart){
    const value =shoppingCart[propertyName];
    console.log(propertyName ,value)
}
