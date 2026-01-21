import { useContext } from 'react'
import { BannerContext } from './Banner'

export default function BannerTitle({ children }) {

    const variant = useContext(BannerContext)

    return (
        <span className={`banner-title ${variant}`}>
            {children}
        </span>
    )
}