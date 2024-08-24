import '../styles/Header.css'

export default function header() {
    return (
        <header className="header">
            <div className="home">
                <img src="src\assets\home.png" alt="Home" />
            </div>
            <div className="lupa">
                <img src="src\assets\lupa.png" alt="Lupa" />
            </div>
            <div className="barra">
                Que deseas buscar?
            </div>
            <div className="user">
                <img src="src\assets\user.png" alt="Usuario" />
            </div>
            <div className="config">
                <img src="src\assets\config.png" alt="Configuraciones" />
            </div>
        </header>
    )
}
