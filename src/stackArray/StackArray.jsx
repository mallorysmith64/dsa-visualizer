import React, { useState } from 'react'
import Editor from '../components/Editor'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import AddCircleIcon from '@material-ui/icons/AddCircle'

function StackArray() {
  let [array, setArray] = useState([])
  let [field, setField] = useState('')

  const handlePush = () => {
    if (array.length < 5) {
      setArray([...array, field])
      console.log('Added element: ', field)
    } else {
      console.log('Stack Overflow!')
      alert('Stack Overflow!')
    }
  }

  const handlePop = i => {
    let index = array.indexOf(i)
    if (array.length > 0) {
      array.splice(index, 1) // slice: start position, number of elements to delete
      console.log(array)
      setArray([...array])
    } else {
      console.log(array)
      alert('Stack Underflow!')
    }
  }

  const handleClear = () => {
    while (array.length) {
      array.pop()
      console.log(array)
      setArray([...array])
    }
  }

  const changeField = event => {
    console.log(
      'field',
      field,
      'event.target',
      event.target,
      'value',
      event.target.value
    )
    setField(event.target.value)
  }

  return (
    <>
      <section className="header">
        <header>Stack (Array Implementation)</header>
      </section>

      <section className="controller-container">
        <div className="editor-options-container">
          <div className="buttons">
            <Button variant="contained" color="primary">
              <PlayArrowIcon></PlayArrowIcon>Play
            </Button>
          </div>

          <div className="buttons left-btn">
            <Button variant="contained" color="primary">
              <ArrowLeftIcon></ArrowLeftIcon>
            </Button>
          </div>

          <div id="progress-bar">
            <div>0/4</div>
          </div>

          <div className="buttons">
            <Button variant="contained" color="primary">
              <ArrowRightIcon></ArrowRightIcon>
            </Button>
          </div>
        </div>

        <section className="operation-container">
          <form>
            <div className="input">
              <input
                type="text"
                onChange={changeField}
                defaultValue={field}
                placeholder="enter num or char"
                maxLength="7"
                size="12"
              ></input>
            </div>
          </form>

          <div className="buttons">
            <Button onClick={handlePush} value="Push" variant="contained">
              Push
            </Button>
          </div>

          <div className="buttons">
            <Button onClick={handlePop} value="Pop" variant="contained">
              Pop
            </Button>
          </div>

          <div className="buttons">
            <Button onClick={handleClear} value="Clear" variant="contained">
              Clear
            </Button>
          </div>
        </section>
      </section>

      <section className="editor-tab-container">
        <div className="editor-tabs">
          <Button value="ReadMe">code.js</Button>
        </div>

        <div className="editor-tabs">
          <a href="https://github.com/mallorysmith64/dsa-visualizer/blob/test/src/stackArray/README.md">
            README
          </a>
        </div>

        <div className="editor-tabs">
          <Button value="AddCircleIcon">
            <AddCircleIcon></AddCircleIcon>
          </Button>
        </div>
      </section>

      <section className="editor-container">
        {Editor}

        <section className="top-stack-container">
          {/* finds top of stack via the peek method*/}
          <h1>
            Top of Stack: {array.length === 0 ? '0' : `${array.slice(-1)[0]}`}
          </h1>
        </section>

        <section className="squares-container">
          {array.map((v, i) => {
            console.log('array', array, 'index', i, 'field', v)
            return (
              <button key={`v${i}`} className="square">
                {v}
              </button>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default StackArray
