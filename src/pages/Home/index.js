import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { categorias, filtrarCategoria } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";   

function Home() {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Container>

        {
          categorias.map((categoria, indice) => 
            <Category categoria={ categoria }>
              {filtrarCategoria(indice).map((video) => <Card idVideo={video.id} key={video.id} />)}
            </Category>
          )
        }

      </Container>
      <Footer />
    </>
  );
}

export default Home;