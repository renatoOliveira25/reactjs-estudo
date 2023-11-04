import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json"

const categorias = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia"
]

function filtrarCategoria(id) {
  return videos.filter( video => video.category === categorias[id] );
}

function App() {
  return (
    <>
      <Header />
      <Banner imagem="home"/>
      <Container>

        <Category categoria={ categorias[0] }>
          { filtrarCategoria(0).map((video) => <Card idVideo={video.id} key={video.id} />) }
        </Category>

        <Category categoria={ categorias[1] }>
          { filtrarCategoria(1).map((video) => <Card idVideo={video.id} key={video.id} />) }
        </Category>

        <Category categoria={ categorias[2] }>
          { filtrarCategoria(2).map((video) => <Card idVideo={video.id} key={video.id} />) }
        </Category>

        <Category categoria={ categorias[3] }>
          { filtrarCategoria(3).map((video) => <Card idVideo={video.id} key={video.id} />) }
        </Category>

        <Category categoria={ categorias[4] }>
          { filtrarCategoria(4).map((video) => <Card idVideo={video.id} key={video.id} />) }
        </Category>

      </Container>
      <Footer />
    </>
  );
}

export default App;
