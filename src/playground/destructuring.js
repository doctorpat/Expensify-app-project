// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

// const address = ['123 Fake St', 'Chicago', 'Illinois', '90210'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['hot coffee', '$2', '$2.50', '$3'];

const [hotCoffee, , mediumPrice, ] = item;

console.log(`A medium ${hotCoffee} costs ${mediumPrice}.`);