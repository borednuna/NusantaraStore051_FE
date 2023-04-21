import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import ChatFab from './infrastructure/components/chat_fab/chat_fab';
import ProductDetails from './presentation/pages/product_details/product_details';

function App() {
  return (
    <div className="App">
      <ChatFab />
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
