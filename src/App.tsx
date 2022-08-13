import React, { useEffect, useState } from 'react'
import './App.css'
import { words } from './utilis/word'

function App() {
  const [randomValue, setRandomValue] = useState({
    word: '',
    hint: '',
  })
  const [randomWord, setRandomWord] = useState('')
  const [time, setTime] = useState(1)
  const [value, setValue] = useState('')
  const [correctWord, setCorrectWord] = useState('')

  const getSingleWord = () => {
    const singleWord = words[Math.floor(Math.random() * words.length)]
    setRandomValue(singleWord)
    setCorrectWord(singleWord.word)
  }

  const randomizeWord = () => {
    let wordArray = randomValue.word.split('')
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = wordArray[i]
      wordArray[i] = wordArray[j]
      wordArray[j] = temp
    }
    setRandomWord(wordArray.join(''))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!value) {
      alert('Length of word must be greater than 1')
      return
    }
    if (value.toLowerCase() === correctWord.toLowerCase()) {
      alert('correct')
      setValue('')
      getSingleWord()
    } else {
      alert('wrong')
      console.log(correctWord)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
  }

  useEffect(() => {
    getSingleWord()
  }, [])

  useEffect(() => {
    randomizeWord()
  }, [randomValue])

  return (
    <div className='wrapper'>
      <div className='header'>
        <h1>Word Scramble</h1>
      </div>
      <div className='content'>
        <h1 className='random_word'>{randomWord}</h1>
        <p className='hint'>
          Hint: <span>{randomValue.hint}</span>
        </p>
        <p className='time_left'>
          Time Left: <b>{time}</b>s
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={value}
            placeholder='Enter a valid word'
            maxLength={randomValue.word.length}
            onChange={handleChange}
          />
          <div className='button_group'>
            <button className='refresh' type='button' onClick={getSingleWord}>
              Refresh Word
            </button>
            <button className='check_word' type='submit'>
              Check Word
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
