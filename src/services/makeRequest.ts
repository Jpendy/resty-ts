
const bodyMethods: Array<string> = ['POST', 'PUT']

export default function makeRequest(url: string, method: string, body: string): Promise<Array<object> | object> {

    return fetch(url, {
        method,
        headers: bodyMethods.includes(method) ? { 'Content-Type': 'application/json' } : {},
        body: bodyMethods.includes(method) ? body : null
    })
        .then(res => Promise.all([res.ok, res.json()]))
        .then(([ok, json]) => {
            if (!ok) throw json
            return json
        })
}