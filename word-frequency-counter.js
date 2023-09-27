function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/);
  const frequencyMap = new Map();
  for (const word of words) {
    if (frequencyMap.has(word)) {
      frequencyMap.set(word, frequencyMap.get(word) + 1);
    } else {
      frequencyMap.set(word, 1);
    }
  }
  return frequencyMap;
}

module.exports = wordFrequencyCounter;
