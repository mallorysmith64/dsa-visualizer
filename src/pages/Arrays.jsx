import React, { useState } from 'react'
import Editor from './Editor'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

function Arrays() {
  let [push, setPush] = useState([])
  let [submitted, setSubmitted] = useState(false)

  const handleChange = event => {
    setPush(event.target.value)
    setSubmitted(false)
    console.log('Input Value: ', event.target.value)
  }

  const submitChange = () => {
    setSubmitted(true)
    console.log('Value Submitted: ', push)
  }

  return (
    <>
      <section className="header">
        <header>Arrays</header>
      </section>

      <section className="controller-container">
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

        <section className="operation-container">
          <form onSubmit={submitChange}>
            <div className="input">
              <input
                type="text"
                onChange={handleChange}
                value={push}
                placeholder="enter num or char"
              ></input>
            </div>
          </form>

          <Button onClick={submitChange} value="Submit" variant="contained">
            Push
          </Button>

          <div className="buttons">
            <Button variant="contained">Pop</Button>
          </div>

          <div className="buttons">
            <Button variant="contained">Clear</Button>
          </div>
        </section>
      </section>

      <section className="editor-container">
        {Editor}

        <section className="squares-container">
          <button className="square">{submitted === true ? push : ''}</button>

          <button className="square">{submitted === true ? push : ''}</button>

          <button className="square">

          </button>

          <button className="square">

          </button>

        </section>
      </section>
    </>
  )
}

export default Arrays
