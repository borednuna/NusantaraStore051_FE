import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import ProductDetails from './presentation/pages/product_details/product_details';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
