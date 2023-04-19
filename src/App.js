import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import SellerCard from './infrastructure/components/seller_card/seller_card';

function App() {
  return (
    <div className="App">
      <Header />
      <SellerCard />
      <Footer />
    </div>
  );
}

export default App;
