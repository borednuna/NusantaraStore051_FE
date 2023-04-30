import React from "react";
import "./App.scss";

import Header from "./infrastructure/components/header/header";
import Footer from "./infrastructure/components/footer/footer";
import Chat from "./infrastructure/components/chat/chat";
import Webroutes from "./application/routes/webroutes";

function App() {
  return (
    <div className="App">
      <Chat />
      <Header />
      <Webroutes />
      <Footer />
    </div>
  );
}

export default App;
