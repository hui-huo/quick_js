let msg = 'adhlfdsjfoiajf3rl2mrlasdmfa';

console.log(msg.includes('a12')); // 布尔值
console.log(msg.indexOf('312')); // 找不到返回 -1
console.log(msg.search('312')); // 同indexOf，但支持正则

console.log(msg.slice(1, -10)); // 可以是负数切片
console.log(msg.substring(1, -10)); // 不支持负数切片

console.log(msg.split('a')); // 切片为数组

let cars = ['Saab2', 'Volvo2', 'BMW2'];

console.log(cars.includes('Vol1vo')); // 布尔值
console.log(cars.join('-')); // 拼接位字符串

let obj = { name: 'tom', age: 18 };
console.log(Array.from('12323')); // 从可迭代对象创建数组
console.log(Array.isArray(obj)); // 判断是否为数组

console.log(cars.includes('BMW'));
console.log(cars.some((e) => e === 'BMW'));
console.log(cars.every((e) => e.includes('2')));
console.log(cars.indexOf('BMW'));
