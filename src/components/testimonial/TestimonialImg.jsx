
export default function TestimonialImg({props}){
    
    const {img, name, role, children} = props

    return (
        <div className='testimonial-img'>
            <div className='testimonial-img-img-container'>
                <img src={img} alt={`${name}'s profile picture`} />
            </div>
            <div className='testimonial-content'>
                <span className='quotation'>
                    “
                </span>
                <span className='quote'>
                    {children}
                </span>
                <span className='name'>
                    {name}
                </span>
                <span className='role'>
                    {role}
                </span>
            </div>
           
        </div>
    )
}