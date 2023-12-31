//Q 1: JavaScript 字串反轉

function reverseString(str: string) {
  const splitStr = str.split("");
  const reverseSplitStr = splitStr.reverse();
  const joinReverseStr = reverseSplitStr.join("");
  return joinReverseStr;
}

console.log(reverseString("hello"));

// Q 2: JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。
const numbers = [2, 8, 4, 10, 1, 7];
function filterGreaterThanFive(arr: number[]) {
  return arr.filter((num) => num > 5);
}

console.log(filterGreaterThanFive(numbers));

// Q 3: JavaScript: 重構
// 問題：重構這段程式碼並說明原因

// original
function formatName(firstName?: string, lastName?: string) {
  let formattedName = "";

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += " " + lastName;
  }

  return formattedName;
}

console.log(formatName("welly", ""));

// refactoring
function formatName2(firstName?: string, lastName?: string) {
  firstName = firstName || "";
  lastName = lastName || "";

  return `${firstName} ${lastName}`;
}

console.log(formatName2("William", "Chen"));

export { reverseString, filterGreaterThanFive, formatName2 };
