import React from 'react'

interface Props {
    json: Array<Object> | Object,
    error: string | null
}

const Display: React.FC<Props> = ({ json, error }) => {
    return (
        <div>
            {error && <h3>{error}</h3>}
            <pre>{JSON.stringify(json, null, 2)}</pre>
        </div>
    )
}

export default Display