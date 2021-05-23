import React from 'react'
import './styles/Controls.css'

type inputChanger = React.ChangeEventHandler<HTMLInputElement>

interface Props {
    url: string,
    method: string,
    reqBody: string,
    handleUrlChange: inputChanger
    handleMethodChange: inputChanger,
    handleReqBodyChange: React.ChangeEventHandler<HTMLTextAreaElement>,
    submitRequest: React.FormEventHandler<HTMLFormElement>
}

const Controls: React.FC<Props> = ({
    url,
    method,
    reqBody,
    handleUrlChange,
    handleMethodChange,
    handleReqBodyChange,
    submitRequest
}) => {

    return (
        <form onSubmit={submitRequest} >
            <input type="text" onChange={handleUrlChange} value={url} style={{ width: "300px" }} />

            <div>
                <label htmlFor="GET">
                    <input
                        type="radio"
                        name="method"
                        id="GET"
                        value="GET"
                        onChange={handleMethodChange}
                        checked={method === 'GET'}
                    />
                    <span>GET</span>
                </label>

                <label htmlFor="POST">
                    <input
                        type="radio"
                        name="method"
                        id="POST"
                        value="POST"
                        onChange={handleMethodChange}
                        checked={method === 'POST'}
                    />
                    <span>POST</span>
                </label>

                <label htmlFor="PUT">
                    <input
                        type="radio"
                        name="method"
                        id="PUT"
                        value="PUT"
                        onChange={handleMethodChange}
                        checked={method === 'PUT'}
                    />
                    <span>PUT</span>
                </label>

                <label htmlFor="DELETE">
                    <input
                        type="radio"
                        name="method"
                        id="DELETE"
                        value="DELETE"
                        onChange={handleMethodChange}
                        checked={method === 'DELETE'}
                    />
                    <span>DELETE</span>
                </label>

            </div>

            <textarea onChange={handleReqBodyChange} value={reqBody} />
            <button type="submit" >submit</button>

        </form>
    )
}

export default Controls;