// 1
const regexI = new RegExp("cat", "i");

//2

const regexII = /cat/gi;

const str =
  "Some people are dog loving and some are CaT loving and few are both cat and dog loving, cAT, cAt, cat";

// const hsCat = regexI.test(str);
const hsCat = regexII.test(str);

const hasCat = str.match(regexII);

// const catsMatch = regexII.exec(str);

// // console.log(hsCat);

// console.log("match op", hasCat);
// console.log("exec op", catsMatch);

const r1 = /[bcf]at/gi; // character set
const sStr1 = "cat, mar, rat, fat, chat, late";

// console.log(sStr1.match(r1));

const r2 = /[^bcf]at/gi;
const sStr2 = "cat, mar, rat, fat, chat, lat";
// console.log(sStr2.match(r2));

const r3 = /[a-z]at/gi; // range
const sStr3 = "rat, bat, cat, mat, sat, eat";

// console.log(sStr3.match(r3));

// \d it is same as [0-9]

const numReg = /\d/gi;
// const numReg = /[0-9]/gi;
const nStr = "one_101 * $ Two3";
// console.log(nStr.match(numReg));

// \D it is same as [^0-9]
// \w matches any letter, digit and underScore character

const wReg = /\w/gi;
// console.log(nStr.match(wReg));

// \s matches a white space character (space or tab)
// \t matches only tab

// Groups
const grpRegex = /book(.com)?/gi;
const grpStr1 = "book";
const grpStr2 = "book.com";

// console.log(grpRegex.test(grpStr1));
// console.log(grpRegex.test(grpStr2));

// console.log(grpStr1.match(grpRegex));
// console.log(grpStr2.match(grpRegex));

const dotReg = /.at/gi;
const mStr = "rat, bat, cat, mat, sat, eat, *at";
// console.log(mStr.match(dotReg));

const strtReg = /^A/gi; // matches at the start of String
const strtStr = "the an A";
// console.log(strtStr.match(strtReg));

// $ matches at the end of the String
// /t$/gi

// const bReg = /\bm/gi;
const bReg = /oon\b/gi;
const moon = "moon";

// console.log(moon.match(bReg));

const BReg = /ye\B/gi;
const matchStr = "possibly ye@#sterday";
// console.log(matchStr.match(BReg));

const pAReg = /Jack(?=Sparow)/gi;
const pABReg = /(?<=Captain)Jack/gi;
// const jsStr = "JackSpart";
const jsStr = "JackSparow";
const jsStr2 = "CaptainJack";
// console.log(jsStr.match(pAReg));
// console.log(jsStr2.match(pABReg));

const nAReg = /Jack(?!Sparow)/gi;
const negStr = "JackSpart";
console.log(negStr.match(nAReg));
