import Header from "./layout/header/Header.jsx";
import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import ItemSection from "./components/itemSection/ItemSection.jsx";
import Footer from "./layout/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ItemSection />
      <Footer />
    </div>
  );
}

export default App;
