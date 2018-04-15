//forecast today in kelvin
const kelvin = 0;

//forecast today in celcius
const celsius = kelvin -273;

//forecast today in fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//converting celsius to the Newton scale
let newton = celsius * (33/100);

//round down the Fahrenheit newton
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
