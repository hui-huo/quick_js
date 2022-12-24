//单行数值
/*
  多行注释：
    
    js语法和java类似，语句块使用{..}包裹，以分号结束
    变量：var, let
    常量：const
*/

arr = ['html', 'css', 'js'];

// var声明的具有全局作用域
for (var i = 0; i < arr.length; i++) {
  console.log(i);
}

console.log(i + 100); // 可以被访问到，output: 103

for (let index = 0; index < arr.length; index++) {
  console.log(index);
}

console.log(index);
