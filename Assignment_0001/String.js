let str="   Dark Rain  ";
let str2="And Dark Rain"
//charAt function is used to check value at specific index
console.log(str.charAt(3))
// charCodeAt function is used to give the code value of specific index value
console.log(str.charCodeAt(5))
//concat function is used to join different string
console.log(str.concat(" And Dark Rain"))
console.log(str.concat(" ",str2))
//includes function is used to check specific value present in string or not
console.log(str.includes("hello"))
//check string end with specific  value or not
console.log(str.endsWith("Rain"))
//fetch the index of specific value
console.log(str.indexOf("Rain"))
//it give the last index of give value
console.log(str.lastIndexOf("n"))
//it repeat the string with given number.here 4 time string repeated
console.log(str.repeat(4))
//it replace Dark value with Black in given str string
console.log(str.replace("Dark","Black"))
//it check at which index given value present 
console.log(str.search("Rain"))
//it give the portion of string from given index to last index
console.log(str.slice(4))
//it convert the given  string into array
console.log(str.split())
//it check's  whether the string start with given value or not
console.log(str.startsWith("Rain"))
//it give the portion of string from range index,here 5,6 index value fetch
console.log(str.substring(4,7))
//convert into lowercase string
console.log(str.toLowerCase())
//convert into uppercase string
console.log(str.toUpperCase())
//it removes all spaces from start and end of the string
console.log(str.trim())
//it returns the primitive value of the specified object.
console.log(str.valueOf())
//it  returns a string representation of a string
console.log(str.toString())