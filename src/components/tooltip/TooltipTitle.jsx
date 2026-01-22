import React from 'react'
import { TooltipContext } from './Tooltip'

export default function TooltipTitle({children}){

    const {variant, color} = React.useContext(TooltipContext)

    return(
        <span className={`tooltip-title ${variant} ${color}`}>{children}</span>
    )
}