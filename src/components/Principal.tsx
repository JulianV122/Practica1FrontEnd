import '../styles/Principal.css'

export default function Principal() {
    return (
        <main className="main">
            <aside className="aside">
                <div className="collection">
                    <img src="src\assets\collection.png" alt="Collection" />
                </div>
                <div className="like">
                    <img src="src\assets\like.png" alt="Like" />
                </div>
                <div className="history">
                    <img src="src\assets\history.png" alt="History" />
                </div>
            </aside>
            <section className="principal">
                <p className='title'>Musica Recomendada</p>
                <div className="musics">
                    <div className="card">
                        <img src="src\assets\kendrick lamar.jpg" alt="" />
                        <p className='names'> Kendrick Lamar</p>
                    </div>
                    <div className="card">
                        <img src="src\assets\drake.jpeg" alt="" />
                        <p className='names'> Drake</p>
                    </div>
                    <div className="card">
                        <img src="src\assets\daftpunk.jpeg" alt="" />
                        <p className='names'> Daft Punk</p>
                    </div>
                    <div className="card">
                        <img src="src\assets\eminem.jpg" alt="" />
                        <p className='names'> Eminem</p>
                    </div>
                    <div className="card">
                        <img src="src\assets\kanye.jpg" alt="" />
                        <p className='names'> Kanye West</p>
                    </div>
                    <div className="card">
                        <img src="src\assets\macmiller.jpeg" alt="" />
                        <p className='names'> Mac Miller</p>
                    </div>
                    <div className="card">
                        <img src="src\assets\travis.jpeg" alt="" />
                        <p className='names'> Travis Scott</p>
                    </div>
                    <div className="card">
                        <img src="src\assets\pinkfloyd.jpeg" alt="" />
                        <p className='names'> Pink Floyd</p>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}
