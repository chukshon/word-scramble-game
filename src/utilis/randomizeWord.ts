export const randomizeWord = (word: string) => {
  let wordArray = word.split('')
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = wordArray[i]
    wordArray[i] = wordArray[j]
    wordArray[j] = temp
  }
  return wordArray.join('')
}
