import styles from "./Card.module.css"

function Card({ idVideo }) {
    return (
        <section className={ styles.card }>
            <a 
                href={`https://www.youtube.com/watch?v=${idVideo}`}
                rel="noreferrer noopener"
                target="_blank"
            >
                <img src={`https://img.youtube.com/vi/${idVideo}/mqdefault.jpg`} alt="Capa"/>
            </a>
        </section>
    );
}

export default Card;