import "./App.scss";
// import Routes from "./application/routes/routes";

import Header from "./infrastructure/components/header/header";
import Footer from "./infrastructure/components/footer/footer";
import Chat from "./infrastructure/components/chat/chat";
import Cart from "./presentation/pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Chat />
      <Header />
      {/* <Routes /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
