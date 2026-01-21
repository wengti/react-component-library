
export default function TestimonialText({ props }) {
    const { name, role, children } = props

    return (
        <div className='testimonial-text'>
            <img src="/dot.png" className='dot-bg'/>
            <div className='logo above'>
                <img src="/mark.png" />
                <span className='logo-text'>Work<span className='blue-mark'>cation</span></span>
            </div>
            <span className='text-quote above'>
                "{children}"
            </span>
            <span className='name-role above'>
                <span className="text-name">{name} <span className='stroke'>/ </span></span> 
                <span className='text-role'>{role}</span>
            </span>

        </div>
    )
}