{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

    // number
    const num: number = -6;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let name: undefined; // ๐ฉ (optional๋ก ์ฐ์ >> ํ์ ์ง์  ํ, | undefined๋ฅผ ์กฐ๊ฑด์ผ๋ก ๋ถ์ฌ์ค๋ค)
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
      return undefined;
    }

    // null   
    let person: null; // ๐ฉ  (optional๋ก ์ฐ์ >> ํ์ ์ง์  ํ, | null์ ์กฐ๊ฑด์ผ๋ก ๋ถ์ฌ์ค๋ค)
    let person2: string | null;

    // unknown ๐ฉ  >> ์ด๋ค ์ข๋ฅ์ ๋ฐ์ดํฐ๊ฐ ๋ด๊ธธ์ง ๋ชจ๋ฅผ ๋ ์ฌ์ฉ (๊ฐ๊ธ์  ์ฌ์ฉํ์ง ์๊ธฐ)
    let notSure: unknown = 0;  
    notSure = 'he';
    notSure = true;

    // any ๐ฉ  >> ์ด๋ค ์ข๋ฅ์ ๋ฐ์ดํฐ๋  ์ฌ์ฉ ๊ฐ๋ฅ (๊ฐ๊ธ์  ์ฌ์ฉํ์ง ์๊ธฐ)
    let anything: any = 0;
    anything = 'hello';

    // void   >> ํจ์์์ ์๋ฌด๊ฒ๋ ๋ฆฌํดํ์ง ์์ ๋ voidํ์ ์ง์  / ์ฃผ๋ก ํจ์์ ์ง์ 
    function print(): void {
      console.log('hello');
      return;
    }
    let unusable: void = undefined; // ๐ฉ

    // never  >> ์๋ฌ๋ฅผ ํธ๋ค๋ง ํ  ๋ ์ฃผ๋ก ์ฌ์ฉ(ํจ์์์ ์๋ฌด๊ฒ๋ ๋ฆฌํดํ์ง ์๋๋ค) / ๋๋ while๋ฌธ ๋ฑ์ผ๋ก ๋ฌดํ๋ฐ๋ณตํ์ฌ ๋ฆฌํด์์ด ๋ฐ๋ณต๋  ๋ ์ฌ์ฉ
    function throwError(message: string): never {
      // message -> server (log)
      throw new Error(message);
    }
    function repetitive(): never {
      while (true) {
        // ๋ฐ๋ณต๋ฌธ(๋ฆฌํดํ๋ ๊ฒ์ด ์๋ค. ๋ฌดํ๋ฐ๋ณต)
      }
    }
    let neverEnding: never; // ๐ฉ

  
    // objet
    let obj: object; // ๐ฉ  ์ด๋ค ํ์์ด๋  ๋ด์ ์ ์๊ธฐ ๋๋ฌธ์ ๊ฐ๊ธ์  ๊ตฌ์ฒด์ ์ผ๋ก ๋ช์ํ๋ ๊ฒ์ด ์ข๋ค
    function acceptSomeObject(obj: object) {}  // ์์ํ์์ ์ ์ธํ ๋ชจ๋  objectํ์์ ๋ด์ ์ ์๋ค(๋ฐฐ์ด๋)
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
}
