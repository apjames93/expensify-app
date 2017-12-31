//obj destructing
// const person = {
//     name: 'Alex',
//     age: 24,
//     location: {
//         city: 'Denver',
//         temp: 50
//     }
// };

// // const name = person.name;
// // const age = person.age;
// // console.log(person.name + ' is ' + person.age)

// const {name: firstName = 'Anonymous', age} = person;
// console.log(firstName + ' is ' + age)

// console.log(person.location.temp + ' in ' + person.location.city)

// const {city, temp: temperature } = person.location;

// console.log('its ' + temperature + ' in ' + city);

// const car = {
//     make: 'Acura',
//     model: 'RSX',
//     eng: {
//         name: 'k24'
//     }
// }

// const { name: motor = 'n/a'  } = car.eng

// console.log(motor)

// array destructuring 

// const address = ['122 s something', 'Denver', 'CO', '12345']
const address = []


// const [ street, city, state, zip ] = address;
// const [ , city, state,  ] = address;
const [ , city = 'denver', state = 'CO',  ] = address;



console.log('you are in ' + address[1] + ' ' + address[2])

console.log('you are in ' + city + ' ' +  state)


const item = [ 'Coffee', '$2.00', '$2.50', '$2.75' ];

const [ c , s, m , l] = item;

console.log(`${c}  medium ${m}`);


