import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import { FileManager } from './components/FileManager/FileManager'
import { colors } from './constants/colors'

export default function App() {
  return (
    <div
      className="app"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.gray,
        color: colors.white,
      }}
    >
      <FileManager />
    </div>
  )
}
