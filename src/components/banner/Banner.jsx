import { FaCheckCircle } from "react-icons/fa"
import { IoWarning } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { FaCircleInfo } from "react-icons/fa6";
import { createContext } from 'react'
import { createPortal } from 'react-dom'


export const BannerContext = createContext()

export default function Banner({ children, variant = "neutral", role = "", position ="", toast=""}) {

    let bannerIcon
    switch (variant) {
        case "success":
            bannerIcon = <FaCheckCircle />
            break
        case "warning":
            bannerIcon = <IoWarning />
            break
        case "error":
            bannerIcon = <RxCrossCircled />
            break
        case "neutral":
            bannerIcon = <FaCircleInfo />
            break
        default:
            bannerIcon = <FaCircleInfo />
    }

    const output = (
        <div
            className={`banner ${variant} ${role} ${position}`}
            ref= { 
                role === 'toast'
                ? toast
                : null
            }
        >
            <div className={`banner-icon ${variant}`}>
                {bannerIcon}
            </div>
            <div className='banner-content'>
                {children}
            </div>
        </div>
    )


    return (
        <BannerContext value={variant}>
            {
                role === 'toast'
                    ? createPortal(output, document.body)
                    : output
            }
        </BannerContext>
    )
}