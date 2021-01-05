import React, { useState, useEffect, useRef } from 'react'

const RandomChoicePicker = () => {
  const textInput = useRef(null)

  const [choices, setChoices] = useState([])

  const keyUpHandler = (e) => {
    if (e.key === ',') {
      createTags(e.target.value)
    } else if (e.key === 'Enter') {
      createTags(e.target.value)

      setTimeout(() => {
        e.target.value = ''
      }, 10)

      randomSelect()
    }
  }

  const createTags = (input) => {
    console.log('create tags')
    // const tags = input
    //   .split(',')
    //   .filter((tag) => tag.trim() !== '')
    //   .map((tag) => tag.trim())
  }

  const randomSelect = () => {
    console.log('hello')
  }

  useEffect(() => {
    textInput.current.focus()
  }, [])

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
      <div id='tags'>
        <span className='tag'>Choice 1</span>
        <span className='tag'>Choice 2</span>
        <span className='tag'>Choice 3</span>
      </div>
    </div>
  )
}

export default RandomChoicePicker
