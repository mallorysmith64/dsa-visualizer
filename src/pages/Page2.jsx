import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'
import { Button } from '@material-ui/core'

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

        {/* <Button variant="contained" color="primary">
          Play
        </Button> */}

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
