// Arrow function with two arguments
const sum = (fistParam,secondParam) => {
    return fistParam + secondParam;
};
console.log(sum(2,5));

// Arrow function with no argements
const printHello = () =>{
    console.log("hello");
};
printHello();

// Arrow function with a singe argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms`);
};
checkWeight(25);

//concise arrow function
const multiplay = (a,b) => a*b;
console.log(multiplay(2,30));