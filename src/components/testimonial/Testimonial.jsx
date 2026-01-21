import TestimonialImg from './TestimonialImg'
import TestimonialText from './TestimonialText'

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