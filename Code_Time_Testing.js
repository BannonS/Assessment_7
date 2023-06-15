const perf = require('execution-time')();

// Add2Zero Function

let array = [-2, 3, 1, 0, 1]

add2Zero = () => {
let value = false
 for (i = 0; i < array.length; i++) {
  for (j = 0; j < array.length; j++) {
    if (i !== j) {
     if (array[i] + array[j] === 0) {
                    value = true
                }
            }
        }
    }
    console.log(value)
}

    perf.start();
    add2Zero(array);
    let resultsAppend = perf.stop();
    // 1.7
    console.log(resultsAppend.preciseWords)

// Unique Characters function
    
function hasUniquechar(word) {
    const charCheck = {};
    for(i = 0; i < word.length; i++) {
    const char = word[i]
    if (charCheck[char]) {
        return false;
        }
    charCheck[char] = true; 
    }
    return true;
}
const word = 'BabAGenush'
console.log(hasUniquechar(word))
    
perf.start();
hasUniquechar(word);
let resultsAppend2 = perf.stop();
// 10
console.log(resultsAppend2.preciseWords)

// PanGram Function

const panGramArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const panGramCheck = (sentence) => {
  const sentenceWithoutSpaces = sentence.replace(/\s/g, '').toLowerCase();
  
  for (let i = 0; i < panGramArray.length; i++) {
    const letter = panGramArray[i];
    
    if (!sentenceWithoutSpaces.includes(letter)) {
      return false;
    }
  }
  
  return true;
};


const sentence1 = "The quick brown fox jumps over the lazy dog";
console.log(panGramCheck(sentence1));
const sentence2 = "Hello, world!";
console.log(panGramCheck(sentence2)); 

perf.start();
panGramCheck(sentence1);
let resultsAppend3 = perf.stop();
// 300
console.log(resultsAppend3.preciseWords)

// Longest word function

const longestWord = (words) => {
    let longest = '';
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      if (word.length > longest.length) {
        longest = word;
      }
    }
    
    return longest;
  };
  
 
  const wordArray = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
  console.log(longestWord(wordArray)); // Output: 'elderberry'
  
  perf.start();
  panGramCheck(sentence1);
  let resultsAppend4 = perf.stop();
//   110
  console.log(resultsAppend4.preciseWords)