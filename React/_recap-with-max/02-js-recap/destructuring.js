// Array destructuring
{
  const [a, b] = ['Domantas', 'Renata'];
  console.log(a, b);
}

// Object Destructuring
const { name } = { name: 'Domantas', age: 30 };
console.log(name);

const numbers = [1, 2, 3];
{
  const [num1, num2] = numbers;
  console.log(num1, num2);
}
