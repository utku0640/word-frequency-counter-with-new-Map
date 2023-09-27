# Challenge: Word Frequency Counter

## Instructions

Write a function called `wordFrequencyCounter` that takes a string as input and returns a map that represents the frequency of each word in the string. We did a similar challenge way back that counted the occurrences of a character. This function should count the occurrences of each word, ignoring case and excluding punctuation.

### Function Signature

```js
/**
 * Returns a map that represents the frequency of each word in the input string.
 * @param {string} str - The input string containing words.
 * @returns {Map<string, number>} - The map with word frequency.
 */
function wordFrequencyCounter(str) {
  // Your code here
}
```

### Examples

```js
wordFrequencyCounter('The quick brown fox jumps over the lazy dog.');
// Output: Map { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }

wordFrequencyCounter(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
);
// Output: Map { 'lorem' => 1, 'ipsum' => 1, 'dolor' => 1, 'sit' => 1, 'amet' => 1, 'consectetur' => 1, 'adipiscing' => 1, 'elit' => 1 }
```




