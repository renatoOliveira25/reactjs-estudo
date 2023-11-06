import styles from "./Assistir.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import PageNotFound from "../../pages/PageNotFound"
import { useParams } from "react-router-dom"
import videos from "../../json/videos.json"

function Assistir() {
    const params = useParams(); 
    const video = videos.find((video) => { return video.id === params.id});
    if(!video) { return <PageNotFound />}

    return (
        <>
            <Header />
            <Container>
                <section className={styles.assistir}>
                    <iframe 
                    width="854" height="480" 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Assistir;