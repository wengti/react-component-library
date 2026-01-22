import React from 'react'
import Badge from './components/badge/Badge'
import Banner from './components/banner/index'
import Card from './components/card/index'
import Testimonial from './components/testimonial/Testimonial'
import Tooltip from './components/tooltip/index'

export default function App() {

    const toasts = React.useRef(null)

    function addToToasts(node, name) {
        if (toasts.current === null) {
            toasts.current = {}
        }
        toasts.current[name] = node

        return (() => { delete (toasts.current.name) })
    }

    function showToast(event, type) {
        toasts.current[type].style.display = "block"
        toasts.current[type].style.opacity = 1

        setTimeout(() => {
            toasts.current[type].style.opacity = 0
        }, 2000)

        setTimeout(() => {
            toasts.current[type].style.display = "none"
        }, 2500)
    }


    return (
        <>
            <h1 className='theme'>React Components Library</h1>

            {/* ----- */}
            {/* Badge */}
            {/* ----- */}
            <h2 className='title'>BADGES</h2>
            <div className='badge-container'>
                <Badge>Badge</Badge>
                <Badge color='red'>Badge</Badge>
                <Badge color='yellow'>Badge</Badge>
                <Badge color='green'>Badge</Badge>
                <Badge color='blue'>Badge</Badge>
                <Badge color='indigo'>Badge</Badge>
                <Badge color='purple'>Badge</Badge>
                <Badge color='pink'>Badge</Badge>
            </div>

            <div className='badge-container'>
                <Badge>Badge</Badge>
                <Badge variant='pill' color='red'>Badge</Badge>
                <Badge variant='pill' color='yellow'>Badge</Badge>
                <Badge variant='pill' color='green'>Badge</Badge>
                <Badge variant='pill' color='blue'>Badge</Badge>
                <Badge variant='pill' color='indigo'>Badge</Badge>
                <Badge variant='pill' color='purple'>Badge</Badge>
                <Badge variant='pill' color='pink'>Badge</Badge>
            </div>

            {/* ------ */}
            {/* Banner */}
            {/* ------ */}

            <h2 className='title'>BANNER</h2>
            <Banner variant='success'>
                <Banner.Title>
                    Congratulations
                </Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                </Banner.Text>
            </Banner>

            <Banner variant='warning'>
                <Banner.Title>
                    Attention
                </Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                </Banner.Text>
            </Banner>

            <Banner variant='error'>
                <Banner.Title>
                    There's a problem with your application
                </Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                </Banner.Text>
            </Banner>

            <Banner variant='neutral'>
                <Banner.Title>
                    Update Available
                </Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                </Banner.Text>
            </Banner>



            <Banner variant='success'>
                <Banner.Title>
                    Congratulations
                </Banner.Title>
            </Banner>

            <Banner variant='warning'>
                <Banner.Title>
                    Attention
                </Banner.Title>
            </Banner>

            <Banner variant='error'>
                <Banner.Title>
                    There's a problem with your application
                </Banner.Title>
            </Banner>

            <Banner variant='neutral'>
                <Banner.Title>
                    Update Available
                </Banner.Title>
            </Banner>

            {/* ---- */}
            {/* Card */}
            {/* ---- */}
            <h2 className='title'>CARD</h2>
            <div className='card-container'>
                <Card img="/icon.png" backgroundColor='#3F75FE'>
                    <Card.Title>
                        Easy Deployment
                    </Card.Title>
                    <Card.Text>
                        Ac tincidunt sapien vehicula erat
                        auctor pellentesque rhoncus.
                        Et magna sit morbi lobortis.
                    </Card.Text>
                </Card>

                <Card img="/user.png" backgroundColor='#88e49f'>
                    <Card.Title>
                        Easy Deployment
                    </Card.Title>
                    <Card.Text>
                        Ac tincidunt sapien vehicula erat
                        auctor pellentesque rhoncus.
                        Et magna sit morbi lobortis.
                    </Card.Text>
                </Card>
            </div>

            {/* ----------- */}
            {/* Testimonial */}
            {/* ----------- */}
            <h2 className='title'>TESTIMONIAL</h2>
            <div className='testimonial-container'>
                <Testimonial
                    img="/pfp.jpg"
                    name="May Andersons"
                    role="Workcation, CTO"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet
                    augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Testimonial>

                <Testimonial
                    name="May Andersons"
                    role="Workcation, CTO"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
                </Testimonial>
            </div>

            {/* ------- */}
            {/* Tooltip */}
            {/* ------- */}
            <h2 className='title'>Tooltip</h2>
            <div className='tooltip-container'>
                <Tooltip>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>

                <Tooltip variant='bold' color='blue'>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>

                <Tooltip variant='bold' color='pink'>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>

                <Tooltip variant='bold' color='green'>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>

                <Tooltip variant='light'>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>

                <Tooltip variant='light' color='blue'>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>

                <Tooltip variant='light' color='pink'>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>

                <Tooltip variant='light' color='green'>
                    <Tooltip.Title>
                        Archive Notes
                    </Tooltip.Title>
                    <Tooltip.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip.Text>
                </Tooltip>
            </div>

            <h2 className='title'>TOASTS POPUPS</h2>
            <div className="toast-popups-container">
                <div className='btn-containers'>
                    <button className='success-btn' onClick={(event) => { showToast(event, "success") }}>Click me to show success</button>
                    <button className='warning-btn' onClick={(event) => { showToast(event, "warning") }}>Click me to show warning</button>
                    <button className='neutral-btn' onClick={(event) => { showToast(event, "neutral") }}>Click me to show neutral</button>
                    <button className='error-btn' onClick={(event) => { showToast(event, "error") }}>Click me to show error</button>
                </div>

                <Banner
                    variant='success'
                    role="toast"
                    addToToasts={addToToasts}
                    position="top-left"
                >
                    <Banner.Title>
                        Success
                    </Banner.Title>
                    <Banner.Text>
                        Your work has been saved
                    </Banner.Text>
                </Banner>

                <Banner
                    variant='warning'
                    role="toast"
                    addToToasts={addToToasts}
                    position="top-right"
                >
                    <Banner.Title>
                        Warning
                    </Banner.Title>
                    <Banner.Text>
                        A network error was detected.
                    </Banner.Text>
                </Banner>

                <Banner
                    variant='neutral'
                    role="toast"
                    addToToasts={addToToasts}
                    position="bottom-left"
                >
                    <Banner.Title>
                        Information
                    </Banner.Title>
                    <Banner.Text>
                        Please read updated information
                    </Banner.Text>
                </Banner>

                <Banner
                    variant='error'
                    role="toast"
                    addToToasts={addToToasts}
                    position="bottom-right"
                >
                    <Banner.Title>
                        Error
                    </Banner.Title>
                    <Banner.Text>
                        Please resave your work again
                    </Banner.Text>
                </Banner>


            </div>


        </>
    )
}