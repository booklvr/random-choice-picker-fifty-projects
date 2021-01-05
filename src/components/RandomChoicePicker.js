import React, { useState, useEffect, useRef } from 'react'

const RandomChoicePicker = () => {
  const textInput = useRef(null)

  const [choices, setChoices] = useState('')
  const [isFinished, setIsFinished] = useState(false)
  const [randomIndex, setRandomIndex] = useState('')
  // const [randomIndex, setRandomIndex] = useState('')

  const keyUpHandler = (e) => {
    if (isFinished) {
      setIsFinished(false)
      setChoices('')
    }
    if (e.key === ',') {
      createTags(e.target.value)
    } else if (e.key === 'Enter') {
      createTags(e.target.value)

      setIsFinished(true)

      setTimeout(() => {
        e.target.value = ''
      }, 10)
    }
  }

  const createTags = (input) => {
    const tags = input
      .split(',')
      .filter((tag) => tag.trim() !== '')
      .map((tag) => tag.trim())

    setChoices(tags)
  }

  const randomSelect = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    setRandomIndex(randomIndex)
    console.log(randomIndex)
  }

  useEffect(() => {
    if (isFinished) {
      const times = 30
      const interval = setInterval(() => {
        //highlight

        setTimeout(() => {
          randomSelect()
        }, 100)
      }, 100)

      setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
          randomSelect()
        }, 100)
      }, times * 100)
    }
  }, [isFinished])

  useEffect(() => {}, [choices])

  return (
    <div className='container'>
      <h3>
        Enter all of the choices divided by a comma (','). <br /> Press Enter
        when you're done.
      </h3>
      <textarea
        ref={textInput}
        placeholder='Enter choices here...'
        id='textarea'
        onKeyUp={(e) => keyUpHandler(e)}
      ></textarea>
      {choices && (
        <div id='tags'>
          {choices.map((choice, index) => (
            <span
              key={index}
              id='tag'
              className={`${randomIndex === index ? 'tag highlight' : 'tag'}`}
            >
              {choice}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default RandomChoicePicker
