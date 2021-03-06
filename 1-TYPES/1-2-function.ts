{
  // JavaScript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript โจ
  function addNum(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ๐ฉ
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript โจ
  function fetchNum(id: string): Promise<number> {  // ์ด ํจ์๋ Promise๋ฅผ ๋ฐํํ๋ฉฐ, ํด๋น ์ธ์๋ numberํ์ด๊ตฌ๋ ๋ฅผ ์ ์ ์๋ค
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript โจ => TypeScript

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');  // ์ ํด์ง ์ธ์ ๊ฐฏ์๋๋ก ์ ๋ฌํด์ผํจ  >> lastName์ธ์์ ?(๋ฌผ์ํ)๋ฅผ ๋ถ์์ผ๋ก์จ, "๋ฌธ์์ด๋ก ์ ๋ฌํด๋๋๊ณ  ์ ๋ฌํ์ง ์์๋ ๋๋ค(optional)" ๋ผ๋ ๋ป
  printName('Anna');

  // Default parameter
  function printMessage(message: string = 'default message') {   // ๊ธฐ๋ณธ๊ฐ์ ์ง์ ํด๋์ผ๋ฉด ์๋ฌด๊ฐ์ ๋ฐ์ง ์์๋ ์ค๋ฅ์์ด defalt๊ฐ์ด ์ถ๋ ฅ๋จ (์์์ ์ฐจ์ด์ ์, ?๋ฅผ ์ง์ ํ์ง์์ผ๋ฉด ์๋ฌ)
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
