import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import { FileManagerContainer } from './FileManager.styles'

export const FileManager = () => {
  const reader = new FileReader()
  const [textLines, setTextLines] = useState<string[] | undefined>([])

  const handleUploadFile = (e: any) => {
    reader.onload = (event) =>
      setTextLines(event?.target?.result?.toString().split('\n'))
    reader.readAsText(e.target.files[0])
  }

  React.useEffect(() => {
    console.log(textLines)
  }, [textLines])
  return (
    <>
      <FileManagerContainer
        controlId="formFileLg"
        className="mb-3"
        onChange={handleUploadFile}
      >
        <Form.Label>Выберите текстовый файл</Form.Label>
        <Form.Control type="file" size="lg" />
      </FileManagerContainer>
      {textLines?.map((el) => (
        <h1>{el}</h1>
      ))}
    </>
  )
}
