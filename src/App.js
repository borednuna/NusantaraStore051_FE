import "./App.scss";
// import Routes from "./application/routes/routes";

import Header from "./infrastructure/components/header/header";
import Footer from "./infrastructure/components/footer/footer";
import Chat from "./infrastructure/components/chat/chat";
import Wishlist from "./presentation/pages/wishlist/wishlist";

function App() {
  return (
    <div className="App">
      <Chat />
      <Header />
      {/* <Routes /> */}
      <Wishlist />
      <Footer />
    </div>
  );
}

export default App;
