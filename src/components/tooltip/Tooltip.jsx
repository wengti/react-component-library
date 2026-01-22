import { IoIosArchive } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React from 'react'

export const TooltipContext = React.createContext()

export default function Tooltip({ children, variant = "", color=""}) {

    const tooltipEl = React.useRef(null)

    function handleClose(){
        tooltipEl.current.style.opacity = "0";
        setTimeout(()=>{
            tooltipEl.current.style.display = "none";
        }, 1000)
        
    }

    return (
        <TooltipContext value={ {variant, color}}>
            <div className={`tooltip ${variant} ${color}`} ref={tooltipEl}>
                <div className={`tooltip-triangle ${variant} ${color}`}></div>
                <div className={`tooltip-x ${variant} ${color}`} onClick={handleClose}><RxCross2 /></div>
                <div className={`tooltip-icon-container ${variant} ${color}`}>
                    <IoIosArchive className="tooltip-icon" />
                </div>
                <div className='tooltip-content'>
                    {children}
                </div>
            </div>
        </TooltipContext>
    )
}