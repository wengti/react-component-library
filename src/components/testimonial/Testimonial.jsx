import TestimonialImg from './TestimonialImg'
import TestimonialText from './TestimonialText'
import './index.css'


export default function Testimonial(props) {
    return (
        props.img
            ? <TestimonialImg
                props = {props}
                />
            : <TestimonialText 
                props={props}
                />
    )
}