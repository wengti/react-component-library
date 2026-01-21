import { useContext } from 'react'
import { BannerContext } from './Banner'

export default function BannerText({ children }) {

    const variant = useContext(BannerContext)

    return (
        <span className={`banner-text ${variant}`}>
            {children}
        </span>
    )
}