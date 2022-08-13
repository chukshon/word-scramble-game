import { useEffect } from 'react'
import './App.css'
import { useApp } from './useApp'
import { randomizeWord } from './utilis/randomizeWord'

function App() {
  const {
    randomValue,
    randomWord,
    time,
    setTime,
    value,
    correctWord,
    getSingleWord,
    handleSubmit,
    handleChange,
    setRandomWord,
  } = useApp()

  useEffect(() => {
    getSingleWord()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setRandomWord(randomizeWord(randomValue.word))
    // eslint-disable-next-line
  }, [randomValue])

  useEffect(() => {
    const interval = setTimeout(() => {
      setTime((time: number) => (time = time - 1))
    }, 3000)

    if (time < 0) {
      alert(`Time off! ${correctWord} was the correct word`)
      setTime(30)
      getSingleWord()
    }
    return () => clearTimeout(interval)
    // eslint-disable-next-line
  }, [time])

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
