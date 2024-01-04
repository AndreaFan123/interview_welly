# Questions from Welly

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

```typescript
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
```

### 想法：

這個函式的主要目的在於接受兩個參數，並將兩個參數合併成一個字串，如果其中一個參數為空值，就不會合併進去。

以下是我考量重構的原因：

#### 閱讀性：

原本的函式使用了兩個 `if` 來判斷參數是否為空值，並且在每個 `if` 裡面都有對 `formattedName` 進行操作，這樣的寫法會讓閱讀程式碼的人需要花更多的時間來理解程式碼的意思。

第一個 `if`檢查 `firstName` 是否為空值，如果不是空值，就將 `firstName` 加入 `formattedName`，第二個 `if` 檢查 `lastName` 是否為空值，如果不是空值，就將 `lastName` 加入 `formattedName`，最後回傳 `formattedName`。

重構後的函式中，第一行跟第二行分別也進行了 `firstName` 跟 `lastName` 的空值判斷，但是這裡使用了 `||` 來判斷，如果 `firstName` 為空值，就會回傳空字串，如果 `lastName` 為空值。這樣閱讀性會比較好，因為只需要看一行就可以知道 `firstName` 跟 `lastName` 是否為空值。

再來我使用 `template literal` 來將 `firstName` 跟 `lastName` 合併成一個字串，這樣的寫法會比較簡潔，除了增加閱讀性之外，也可以一目瞭然知道這個函式最後應該要呈現的結果。

## Question 4: React 渲染的條件

### 問題：在 React 中，如何根據條件渲染兩種不同的內容？

- 使用 `useState` 來設定登入的初始值為 `false`，並透過 `setIsLoggedIn` 來改變登入狀態。
- 將 `isLoggedIn` 跟 `onLogIn` 作為 props 傳入 `ConditionalRendering`。
- `ConditionalRendering` 內有兩個按鈕，一個是登入，一個是登出，它接收 `onLogin` 作為 `onClick` 的 callback function，當按下按鈕時，會改變 `isLoggedIn` 的狀態。
- `LogInActionButton` 的問候語則依據 `isLoggedIn` 狀態來決定要渲染的內容，如果 `isLoggedIn` 為 `true`，就會顯示 `Hello, welcome back`，如果 `isLoggedIn` 為 `false`，就會顯示 `Please Log In`。

```typescript
// App.tsx
function App() {
  return (
    <div>
      <div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>About</li>
        </ul>
        <LogInActionButton />
      </div>
    </div>
  );
}

export default App;
```

```typescript
// LogInActionButton.tsx

const LogInActionButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      {isLoggedIn && <p>Hello, welcome back</p>}
      <ConditionalRendering isLoggedIn={isLoggedIn} onLogIn={handleLogin} />
    </>
  );
};

export default LogInActionButton;
```

```typescript
// ConditionalRendering.tsx

function ConditionalRendering({
  isLoggedIn,
  onLogIn,
}: {
  isLoggedIn: boolean;
  onLogIn: () => void;
}) {
  return (
    <>
      {isLoggedIn ? (
        <button onClick={onLogIn}>Log Out</button>
      ) : (
        <button onClick={onLogIn}>Log In</button>
      )}
    </>
  );
}

export default ConditionalRendering;
```

## Question 5: React: 組件

### 問題：使用 React 創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

```typescript
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p data-testid="countResult">{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```
