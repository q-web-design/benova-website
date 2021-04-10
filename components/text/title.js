import React from 'react'

export default function Title({children}) {
    return (
        <h1 className="text-5xl text-primary font-semibold">
            {children}
        </h1>
    )
}
