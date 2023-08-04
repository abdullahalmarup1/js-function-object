var shoppingCart = {
    book:2,
    sunglass:5,
    pen:25,
    mouse:5,
    keyboard:2
}
console.log(shoppingCart);

/* jana kono property er value ber korar niyom
1) dot notation */

var penCount = shoppingCart.pen
console.log(penCount);

/* jana kono property er value ber korar niyom
2) arry er moto kore likhe */

var pencount2 = shoppingCart['pen']
// 

// ojana kono Object er property somporke jante evabe likte hoi
var propertyName = Object.keys(shoppingCart);
console.log(propertyName);

// ojana kono Object er property value somporke jante evabe likte hoi

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);
/* 3) evabe o ber kora jai */

var propertyName2 = 'mouse';
propertyValues2 = shoppingCart[propertyName2];
console.log (propertyName2, propertyValues2 );

// kivabe new value set kora jai

/* 1) dot notation */

shoppingCart.mouse = 120;
console.log(shoppingCart);

/* 2) array er modde sting likhe new value diye */

shoppingCart ['mouse'] = 200;
console.log(shoppingCart)

/* 3) varible er maddome */

shoppingCart [propertyName2] = 500;
console.log(shoppingCart)




