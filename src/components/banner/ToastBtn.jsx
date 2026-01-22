
import React from 'react'
import Banner from './Banner'

export default function ToastBtn({variant, bannerRole: role, position, toastTitle, toastText, children}) {

    const toast = React.useRef(null)

    function showToast() {
        toast.current.style.display = "block"
        toast.current.style.opacity = 1

        setTimeout(() => {
            toast.current.style.opacity = 0
        }, 2000)

        setTimeout(() => {
            toast.current.style.display = "none"
        }, 2500)
    }

    return (
        <>
            <button
                className={`toast-btn ${variant}-btn`}
                onClick={showToast}
            >
                {children}
            </button>
            <Banner
                variant={variant}
                role={role}
                toast={toast}
                position={position}
            >
                <Banner.Title>
                    {toastTitle}
                </Banner.Title>
                <Banner.Text>
                    {toastText}
                </Banner.Text>
            </Banner>
        </>
    )
}