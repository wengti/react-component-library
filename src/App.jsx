import React from 'react'
import Badge from './components/badge/Badge'
import Banner from './components/banner/index'
import Card from './components/card/index'
import Testimonial from './components/testimonial/Testimonial'

export default function App() {
    return (
        <>
            {/* ----- */}
            {/* Badge */}
            {/* ----- */}
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


        </>
    )
}