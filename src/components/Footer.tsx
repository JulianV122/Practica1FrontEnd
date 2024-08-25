import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="title">
                <p> Nuestras redes sociales: </p>
            </div>
            <div className="icons">
                <div className="github">
                    <img src="src\assets\github.png" alt="" />
                </div>
                <div className="instagram">
                    <img src="src\assets\instagram.png" alt="" />
                </div>
                <div className="x">
                    <img src="src\assets\x.png" alt="" />
                </div>
            </div>
        </footer>
    )
}

