{
  // Array
  const fruits: string[] = ['๐', '๐'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}  // ์ ๋ฌ๋ ์ธ์๋ฅผ ํจ์ ๋ด๋ถ์์ ๋ณ๊ฒฝํ  ์ ์๋๋ก readonly์ค์  (push, reduce ๋ฑ ๋ณ๊ฒฝ๋ถ๊ฐ)

  // Tuple -> interface, type alias, class (tuple๋์  ๊ฐ์ฒด ํํ ์ฌ์ฉ ๊ถ์ฅ) / ์๋ก ๋ค๋ฅธ ํ์์ ์ฌ์ฉํ  ์ ์๋ค
  let student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  
  const [name, age] = student;  // ํํ์ object destructuring ํํ๋ก ๋ฐ๋ ๊ฒ์ ๊ถ์ฅ (student[0] ๋ฐฉ์์ผ๋ก index๋ก ์ฐพ๋ ๊ฒ์ ๋ฒ๊ฑฐ๋กญ๊ธฐ ๋๋ฌธ)
}
