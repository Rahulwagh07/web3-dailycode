// ## Assignment #1

// What if I ask you the following question — Give me an input string that outputs 
// a SHA-256 hash that starts with `00000` . **How will you do it?**
// const crypto = require('crypto');

// function hashWithPrefix(prefix){
//   let input = 0;
//   while(true){
//     let inputStr = input.toString();
//     let hashedVal = crypto.createHash('sha256').update(inputStr).digest('hex');
//     if(hashedVal.startsWith(prefix)){
//       return hashedVal;
//     }
//     input++;
//   }
// }
// console.log(hashWithPrefix('00000'));


const crypto = require('crypto');
const { performance } = require('perf_hooks');

function findHashWithPrefix(prefix) {
    let input = 0;
    let startTime = performance.now();
    
    while (true) {
      let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            let endTime = performance.now();
            let time = endTime - startTime;
            return { input: inputStr, hash: hash, time: time };
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
console.log(`Time taken: ${result.time}`);
