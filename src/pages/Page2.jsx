import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'

function Page2() {
  function onChange(newValue) {
    console.log('change', newValue)
  }

  return (
    <>
      <section className="header">
        <header>Stack (Array Implementation)</header>
      </section>

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
      
    </>
  )
}

export default Page2