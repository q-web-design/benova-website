import React from 'react'

export default function Title({children}) {
    return (
        <h1 className="text-4xl text-primary font-semibold">
            {children}
        </h1>
    )
}
