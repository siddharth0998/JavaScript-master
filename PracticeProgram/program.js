
// Addition Program

function sum(a,b){
    let add= a+b;
    return add;
}

console.log(sum(10,20));

// Square root of number

function squreRoot(a){
    let sqroot = Math.sqrt(a);
    return sqroot;
}

console.log(squreRoot(10));

// Swap Of Two Number

function swapNumber(a,b){
    let temp = a;
    a = b;
    b = temp;
    console.log("a = ",a);
    console.log("b = ",b);
}

swapNumber(10,20);

// Kilometer to Mile

var coversionFactor = 0.62137119;

function kiloToMile(a){
    let mile = a*coversionFactor;
    return mile;
}

console.log("Miles = ",kiloToMile(10));

// check number whether it's odd or even

function oddEven(a){
    if(a%2 == 0){
        console.log("a is even");
    }
    else{
        console.log("a is odd");
    }
}

oddEven(14);

// whether number is positive or negative or zero

function checkNumber(a){
    if(a>0){
        console.log(a,"is positive");
    }
    else if(a<0){
        console.log(a,"is negative");
    }
    else{
        console.log(a,"is zero");
    }
}

checkNumber(-1);

// area of triangle

function areaOfTri(a,b,c){
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    if(area == 0 ){
        console.log("there is no such traingle exist in real world with given size");
    }
    else{
    console.log("area = ", area);
    }
} 

areaOfTri(10,20,30); // where a,b,c ara size of traingle
