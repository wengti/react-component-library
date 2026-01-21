import React from 'react'

export default function Badge({ children, variant = "square", color="gray", ...rest}) {


    return (
        <div className= {`badge ${variant} ${color}`} {...rest}>
            {children}
        </div>
    )
}