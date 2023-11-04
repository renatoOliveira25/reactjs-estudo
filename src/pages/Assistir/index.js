import styles from "./Assistir.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"

function Assistir() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.assistir}>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/bePCRKGUwAY?si=QQHUGx6dYN7l8T3B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Assistir;