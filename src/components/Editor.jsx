import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'

function onLoad() {
  console.log("i've loaded")
}

function onChange(newValue) {
  console.log('change', newValue)
}

export default (
  <>
    <AceEditor
      placeholder="Happy Coding!"
      mode="javascript"
      theme="twilight"
      name="editor"
      onLoad={onLoad}
      onChange={onChange}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={`function onLoad(editor) {
    console.log("i've loaded");
  }`}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
    )
  </>
)
