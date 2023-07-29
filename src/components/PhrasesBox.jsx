import "./style/PhrasesBox.css"

const PhrasesBox = ({handleChangePhrases, db}) => {
    return (
        <section className="phrasesBox">
            <h1 className="h1">Fortune Cookies</h1>

            <section className="container">
                <button className="btn" onClick={handleChangePhrases}>Tray luck</button>
                <article className="container--phrase">
                    <p>{db.phrase}</p>
                </article>

            </section>

            <footer>
                <h4 className="h4-footer">
                    Author: {db.author}
                </h4>
            </footer>
        
        </section>
)
}

export default PhrasesBox