{
  /**
   * Type Assertions ๐ฉ (ํ์์ ๊ฐ์ํ  ๋)
   */
  function jsStrFunc(): any {  // ํ์์ any๋ก ์ง์ 
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);  // ๊ฒฐ๊ณผ๊ฐ์ด string์ด๋ผ๋ ๊ฒ์ ํ์ ํ  ๋, as ํค์๋๋ฅผ ์ฌ์ฉํด์ length๋ผ๋ API๋ฅผ ์ฌ์ฉํ  ์ ์๋ค
  console.log((<string>result).length);



  const wrong: any = 5;  // ํ์์ any๋ก ์ง์ 
  console.log((wrong as Array<number>).push(1)); // ๐ฑ  ์ซ์๋ฅผ ๋ฐ๋ ๋ฐฐ์ด์ด๋ผ๊ณ  ํ์ ํ๊ณ  1์ด๋ผ๋ ์ซ์๋ฅผ push ํ๋ฉด ์ค๋ฅ๊ฐ ๋จ



  function findNumbers(): number[] | undefined {  // type์ ๋ฐฐ์ด๊ณผ undefined๋ก ์ค์ 
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // ๐ฑ  numbers๋ ์ซ์ง์ผ ์๋ ์๊ณ  undefined ์ผ ์ ์๊ธฐ ๋๋ฌธ์ push๋ฅผ ์ ์ฉํ๋ ๊ฒ์ ๊ฒฝ๊ณ ๊ฐ ๋ธ

  const button = document.querySelector('class')!;
}
