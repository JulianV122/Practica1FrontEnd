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
                This is the principal content
            </section>
        </main>
    )
}
