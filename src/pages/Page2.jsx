import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'

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
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
      );
    </>
  )
}

export default Page2
