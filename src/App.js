import './App.css';
import About from './componenets/About/About';
import Box from './componenets/Box/Box';
import Footer from './componenets/Footer/Footer';
import Header from './componenets/Header/Header';
import Hero from './componenets/Hero/Hero';
import Product from './componenets/Product/Product';
import Service from './componenets/Service/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Box />
      <Product />
      <Box />
      <Service />
      <Box />
      <About />
      <Footer />
    </div>
  );
}

export default App;
