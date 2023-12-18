// Provided story string
let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Split the story into an array of words
let storyWords = story.split(" ");

// Words to be processed
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

// Count the number of words in the story
let count = 0;
storyWords.forEach((word) => count++);
console.log(count);

// Filter out the unnecessary word
storyWords = storyWords.filter((word) => word !== unnecessaryWord);

// Correct misspelled word
storyWords = storyWords.map((word) =>
  word === misspelledWord ? "beautiful" : word
);

// Find the index of the specified bad word
const badWordIndex = storyWords.findIndex((word) => word === badWord);
console.log(badWordIndex);

// Replace a word at a specific index
storyWords.splice(78, 1, "really");

// Check if all words have a length less than 10 characters
let lengthCheck = storyWords.every((word) => word.length < 10);

// Find the index of the first word with a length greater than 10 characters
const longWordIndex = storyWords.findIndex((word) => word.length > 10);
console.log(longWordIndex);

// Replace another word at a specific index
storyWords.splice(111, 1, "stunning");

// Display the processed story
console.log(storyWords.join(" "));

