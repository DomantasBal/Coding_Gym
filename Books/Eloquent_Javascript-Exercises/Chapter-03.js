// ================== Minimum ==================
const result = Math.min(55, 9);

// ================== Recursion ==================
function isEven(n) {
  if (n < 0) {
    return undefined;
  } else {
    if (n == 0) {
      return true;
    }
    if (n == 1) {
      return false;
    }
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// ================== Bean Counting ==================
function countChar(string, char) {
  let count = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] == char) {
      count++;
    }
  }
  return count;
}

const countBs = (string) => countChar(string, "B");

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
