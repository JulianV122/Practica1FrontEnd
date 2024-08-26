import '../styles/Card.css'

type CardContent = {
    img: string,
    title: string,
    alt: string
}

export default function Card({img, title, alt}: CardContent) {
    return (
        <div className="card">
            <img src={img} alt={alt}/>
            <p className='names'>{title}</p>
        </div>
    )
}