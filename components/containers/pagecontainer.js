import React from 'react'

export default function Pagecontainer({children}) {
    return (
        <div className="px-5 max-w-screen-xl mx-auto">
            {children}
        </div>
    )
}
