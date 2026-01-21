export default function Card({img, children, backgroundColor}){

    const style = {
        backgroundColor
    }

    return (
        <div className='card'>
            <div className='card-icon' style={style}>
                <img src={img} alt="The card icon"/>
            </div>
            {children}
        </div>
    )
}