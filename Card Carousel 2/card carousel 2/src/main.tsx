import React from 'react'
import ReactDOM from 'react-dom/client'
import MultipleItems from './App' //First Card
import CenterMode from './OtherCards'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MultipleItems />
    <CenterMode />
  </React.StrictMode>,
)
