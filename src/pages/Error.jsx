import React from "react";
import { useRouteError} from "react-router-dom"

export default function Error() {

    const error = useRouteError()
    console.log(error)

    return (
        <div className="error--page--container">
            <h1 className="error--text">Error: {error.message}</h1>
            <pre>Status: {error.status}</pre>
            <pre>StatusText: {error.statusText}</pre>
        </div>
    )
}