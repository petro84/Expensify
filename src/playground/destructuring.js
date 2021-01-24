// const person = {
//   name: "Larry",
//   age: 36,
//   location: {
//     city: "Lowell",
//     temp: 70,
//   },
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp } = person.location;

// if (city && temp) {
  
//   console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//     title: "Ender's Game",
//     author:'Orson Scott Card',
//     publisher: {
//         name: 'Tor Books'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['212 S Oak St', 'Lowell', 'AR', '72745'];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , medium] = item;

console.log(`A medium ${product} costs ${medium}`);