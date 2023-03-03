import React from 'react'
import MarkdownEditor from './components/Markdown-Editor'
import HTMLPreviewer from './components/HTML-Previewer'
import PagePreviewer from './components/Page-Previewer'

import './assets/scss/main.scss'

function App() {
  return (
    <div className="App">

      <MarkdownEditor />
      <HTMLPreviewer />
      <PagePreviewer />
    </div>
  )
}
export default App