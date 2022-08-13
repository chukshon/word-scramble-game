import React, { useEffect, useState } from 'react'
import './App.css'
import { words } from './utilis/word'

function App() {
  const [randomWord, setRandomWord] = useState({
    word: '',
    hint: '',
  })
  const [time, setTime] = useState(1)
  const [value, setValue] = useState('')
  const [correctWord, setCorrectWord] = useState({
    word: '',
    hint: '',
  })

  const getSingleWord = () => {
    const singleWord = words[Math.floor(Math.random() * words.length)]
    setRandomWord(singleWord)
  }
  const randomizeWord = () => {}

  const refreshWord = () => {
    console.log('refresh')
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!value) {
      alert('Length of word must be greater than 1')
      return
    }
    console.log(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setValue(value)
  }

  useEffect(() => {
    getSingleWord()
  }, [])

  return (
    <div className='wrapper'>
      <div className='header'>
        <h1>Word Scramble</h1>
      </div>
      <div className='content'>
        <h1 className='random_word'>{randomWord.word}</h1>
        <p className='hint'>
          Hint: <span>{randomWord.hint}</span>
        </p>
        <p className='time_left'>
          Time Left: <b>{time}</b>s
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={value}
            placeholder='Enter a valid word'
            maxLength={randomWord.word.length}
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
