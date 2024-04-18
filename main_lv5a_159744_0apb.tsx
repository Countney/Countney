false + false
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
true + true
function addNumbers(a, b) { return a + b; }

const randomNumber = getRandomNumber();
class MyClass { constructor() { this.property = getRandomString(); } }

3 - apple
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true * 9
const getUniqueValues = array => [...new Set(array)];

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

orange / orange
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
27,74,59,5,54,44,91,95,93,62,96,33,20,12,49,28,48,15,32,84,62,3,71,19,46,94,21,12,69,26,13,88,46,62,67,70,17,70,23,65,42,71,37,30,14,73,44,39,59,71,36,75,95,34,12,91,32,87 - false
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
banana

const formatDate = date => new Date(date).toLocaleDateString();
const randomNumber = getRandomNumber();
banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
28,41,66,66,60,89,70,35,31,30,51,76,91,83,71,36,56,51,90,32,72,19,37,26,63,95,51,90,43,45,44,63,4,97,52,63,3,47,45,62,39,13,64,46,29,48,85,99,32 / banana
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

kiwi

const isEven = num => num % 2 === 0;
const squareRoot = num => Math.sqrt(num);
kiwi

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const removeDuplicates = array => Array.from(new Set(array));

grape * 3,13,19,89,31,13,86,56,89,53,10,90,88,18,83,79
const reverseWords = str => str.split(" ").reverse().join(" ");
6 + 56,17,16,37,61,72,0,62,13,96,71,82,93,44,56,69,32,4,57,68,5,92,61,64,41,45,83,80,64,24,58,58,65,70,10,32,79,94,78,17,53,62,23,30,87
const randomNumber = getRandomNumber();
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const removeDuplicates = array => Array.from(new Set(array));
const reverseWords = str => str.split(" ").reverse().join(" ");
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
