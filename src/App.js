import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

function App() {
  return (
    <>
      <Header />
      <Banner imagem="home"/>
      <Container>
        <h2>Geografia</h2>
        <section className="cards">
          { videos.map((video) => { return <Card idVideo={video.id} key={video.id} /> }) }
        </section> 
      </Container>
      <Footer />
    </>
  );
}

export default App;
