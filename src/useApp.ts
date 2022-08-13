import { useState } from 'react'
import { words } from './utilis/word'

export const useApp = () => {
  const [randomValue, setRandomValue] = useState({
    word: '',
    hint: '',
  })
  const [randomWord, setRandomWord] = useState('')
  const [time, setTime] = useState(30)
  const [value, setValue] = useState('')
  const [correctWord, setCorrectWord] = useState('')

  const getSingleWord = () => {
    const singleWord = words[Math.floor(Math.random() * words.length)]
    setValue('')
    setRandomValue(singleWord)
    setCorrectWord(singleWord.word)
    setTime(30)
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!value) {
      alert('Length of word must be greater than 1')
      return
    }
    if (value.toLowerCase() === correctWord.toLowerCase()) {
      alert(`Congrats! ${value.toUpperCase()} is the correct word`)
      getSingleWord()
    } else {
      alert(`Oops! ${value} is not a correct word`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
  }

  const checkTime = () => {
    const interval = setTimeout(() => {
      setTime((time: number) => (time = time - 1))
    }, 3000)

    if (time < 0) {
      alert(`Time off! ${correctWord} was the correct word`)
      setTime(30)
      getSingleWord()
    }
    return () => clearTimeout(interval)
  }
  return {
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
    checkTime,
  }
}
