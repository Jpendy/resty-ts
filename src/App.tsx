import React, { useState } from 'react';
import Controls from './Controls'
import Display from './Display';
import makeRequest from './services/makeRequest';

const App: React.FC = () => {

  const [url, setUrl] = useState<string>('')
  const [method, setMethod] = useState<string>('GET')
  const [reqBody, setReqBody] = useState<string>('')
  const [reqResponse, setReqResponse] = useState<Array<object> | object>([])
  const [error, setError] = useState<string | null>(null)

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUrl(e.target.value)

  const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>): void => setMethod(e.target.value)

  const handleReqBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setReqBody(e.target.value)

  const submitRequest = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    setError(null)

    makeRequest(url, method, reqBody)
      .then(setReqResponse)
      .catch(err => setError(err.message))
  }

  return (
    <>
      <Controls
        url={url}
        method={method}
        reqBody={reqBody}
        handleMethodChange={handleMethodChange}
        handleReqBodyChange={handleReqBodyChange}
        handleUrlChange={handleUrlChange}
        submitRequest={submitRequest}
      />

      <Display json={reqResponse} error={error} />
    </>

  );
}

export default App;
