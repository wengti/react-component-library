import { FaCheckCircle } from "react-icons/fa"
import { IoWarning } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { FaCircleInfo } from "react-icons/fa6";
import {createContext} from 'react'

export const BannerContext = createContext()

export default function Banner({children, variant="neutral"}){

    let bannerIcon
    switch(variant){
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

    return (
        <BannerContext value={variant}>   
            <div className={`banner ${variant}`}>
                <div className={`banner-icon ${variant}`}>
                    {bannerIcon}
                </div>
                <div className='banner-content'>
                    {children}
                </div>
            </div>
        </BannerContext>
    )
}