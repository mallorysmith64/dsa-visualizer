import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import Squares from '../components/Squares'

function Page2() {
  function onChange(newValue) {
    console.log('changed array', newValue)
  }

  return (
    <>
      <section className="header">
        <header>Stack (Array Implementation)</header>
      </section>

      <section className="controllers">
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
      </section>

      <section className="editor-container">
        <AceEditor
          mode="javascript"
          theme="twilight"
          onChange={onChange}
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
          <Squares />
          <Squares />
          <Squares />
          <Squares />
        </section>

        <section className="operations">
          <div className="input">
            <input type="text" placeholder="enter num or char"></input>
          </div>

          <div className="buttons">
            <Button variant="contained">Push</Button>
          </div>

          <div className="buttons">
            <Button variant="contained">Pop</Button>
          </div>
          <div className="buttons">
            <Button variant="contained">Clear</Button>
          </div>
        </section>
      </section>
    </>
  )
}

export default Page2
