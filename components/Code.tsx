import React from 'react'

export default function Code({ children }) {
    return (
        <pre className="my-3 py-4 px-6 rounded-md bg-white dark:bg-black">
            <code>{children}</code>
        </pre>
    )
}
