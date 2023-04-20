import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import PriceTag from './infrastructure/components/price_tag/price_tag';

function App() {
  return (
    <div className="App">
      <Header />
      <PriceTag />
      <Footer />
    </div>
  );
}

export default App;
