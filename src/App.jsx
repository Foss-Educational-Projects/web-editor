import React, { useState, useRef } from 'react'
import MarkdownEditor from './components/Markdown-Editor'
import HTMLPreviewer from './components/HTML-Previwer'
import PagePreviewer from './components/Page-Preiewer'

import './assets/scss/main.scss'

function App() {
  let appStyles = {}
  const appRef = useRef(null)

  return (
    <div className="App" style={appStyles} ref={appRef}>
      <MarkdownEditor />
      <HTMLPreviewer />
      <PagePreviewer />
    </div>
  )
}
export default App
