import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import ProductHeader from './infrastructure/components/product_header/product_header';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductHeader />
      <Footer />
    </div>
  );
}

export default App;
