let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Creating an array of all the words used in the story
let storyWords = story.split(' ');

// A new array with 'unnecessaryWords' fltered out;
const betterWords = storyWords.filter (word => !unnecessaryWords.includes(word));

// How many occurances of 'b' is in 'a'
let countBInA = (a,b) => {
  const wordCount = [];
  b.forEach (() => wordCount.push(0));
  a.forEach(el => {
    if (b.includes(el)){
      wordCount[b.indexOf(el)] ++;
    }
  })
  return wordCount;
  
}
// Report array of words paired with array of frequency
let reportBInA = (a,b) => 
  countBInA(a,b).forEach((el,i) => {
  console.log(b[i] + ': ' + el)
  }) 

// Counting sentences
let sentenceCount = () => {
  let sentences = 0;
  storyWords.forEach(el => {
    if (el.includes('!') || el.includes('.')) {sentences++}
  })
  return sentences;
}

// Removing every other overused word
let removeOverusedWords = () => {
  const wordCount = [];
  overusedWords.forEach (() => wordCount.push(0)); 
  betterWords.forEach((el,i) => {
    if (overusedWords.includes(el)){
      wordCount[overusedWords.indexOf(el)]++;
      if (wordCount[overusedWords.indexOf(el)] % 2 === 0) {
        betterWords.splice(i,1);
      }
    }
  })
}

// Find the most used word
let findUniqueWords = (arr) => {
  let uniqueWords = [];
  arr.forEach((el,i) => {
    if (!uniqueWords.includes(el)) {
      uniqueWords.push(el);   
    }
  })
return uniqueWords;
}


console.log(storyWords.length + ' words')
console.log(sentenceCount() + ' sencences');
reportBInA(betterWords,findUniqueWords(betterWords));


