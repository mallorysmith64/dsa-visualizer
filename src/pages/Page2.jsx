import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'

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

        <section className="squares-container">
          <Squares />
          <Squares />
          <Squares />
          <Squares />
        </section>
      </section>
    </>
  )
}

export default Page2
