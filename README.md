# Questions from Well

## Question 1 JavaScript 字串反轉

```typescript
function reverseString(str: string) {
  const splitStr = str.split("");
  const reverseSplitStr = splitStr.reverse();
  const joinReverseStr = reverseSplitStr.join("");
  return joinReverseStr;
}

console.log(reverseString("hello"));
```

## Question 2 JavaScript 陣列過濾

```typescript
const numbers = [2, 8, 4, 10, 1, 7];
function filterGreaterThanFive(arr: number[]) {
  return arr.filter((num) => num > 5);
}

console.log(filterGreaterThanFive(numbers));
```

## Question 3: JavaScript: 重構

### 問題：重構這段程式碼並說明原因
