import React, { useState } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

function Page2() {
  let [push, setPush] = useState('')
  let [submitted, setSubmitted] = useState(false)

  const handleChange = event => {
    console.log(event.target.value)
    setPush(event.target.value)
  }

  const submitChange = event => {
    event.preventDefault()
    console.log('changed')
    setSubmitted(true)
    setPush(push)
  }

  return (
    <>
      <section className="header">
        <header>Stack (Array Implementation)</header>
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

      {/* <section>
        <div className="buttons" id="read">
          <Button variant="contained">README.md</Button>
        </div>
      </section> */}

      <section className="editor-container">
        <AceEditor
          mode="javascript"
          theme="twilight"
          name="editor"
          placeholder="Happy Coding!"
          fontSize={18}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
        />

        <section className="squares-container">
          <button className="square">
            {submitted === true ? push[0] : ''}
          </button>

          <button className="square">
            {submitted === true ? push[1] : ''}
          </button>

          <button className="square">
            {submitted === true ? push[2] : ''}
          </button>

          <button className="square">
            {submitted === true ? push[3] : ''}
          </button>
        </section>
      </section>
    </>
  )
}

export default Page2
