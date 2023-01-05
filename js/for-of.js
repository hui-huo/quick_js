let obj = {
  name: 'tom',
};

for (let e in obj) {
  console.log(e);
}

let names = new Set(['a', 'b', 'c']);
console.log(names);

names.add('d');
console.log(names);
