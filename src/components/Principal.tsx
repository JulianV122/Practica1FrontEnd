import '../styles/Principal.css'
import Card from './Card'

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
                    <Card img="src\assets\kendrick lamar.jpg" title="Kendrick Lamar" alt="Kendrick Lamar"/>
                    <Card img="src\assets\drake.jpeg" title="Drake" alt="Drake"/>
                    <Card img="src\assets\daftpunk.jpeg" title="Daft Punk" alt="Daft Punk"/>
                    <Card img="src\assets\eminem.jpg" title="Eminem" alt="Eminem"/>
                    <Card img="src\assets\kanye.jpg" title="Kanye West" alt="Kanye West"/>
                    <Card img="src\assets\macmiller.jpeg" title="Mac Miller" alt="Mac Miller"/>
                    <Card img="src\assets\travis.jpeg" title="Travis Scott" alt="Travis Scott"/>
                    <Card img="src\assets\pinkfloyd.jpeg" title="Pink Floyd" alt="Pink Floyd"/>                    
                </div>
            </section>
        </main>
    )
}
