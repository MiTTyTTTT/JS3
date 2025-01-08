const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter you name:',(name)=> {
    rl.question('Enter you weight (in kg):',(weight) => {
        rl.question('Enter your height (in m):',(height)=> {

            let bmi = weight / (height*height);

            console.log(`${name},you BMI is ${bmi.toFixed(2)}`);
            rl.close();
        })
    })
})