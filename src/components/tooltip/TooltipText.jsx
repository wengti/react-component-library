import React from 'react'
import { TooltipContext } from './Tooltip'

export default function TooltipText({children}){

    const {variant, color} = React.useContext(TooltipContext)

    return(
        <span className={`tooltip-text ${variant} ${color}`}>{children}</span>
    )
}


