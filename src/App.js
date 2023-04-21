import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import ChatFab from './infrastructure/components/chat_fab/chat_fab';
import About from './presentation/pages/about/about';

function App() {
  return (
    <div className="App">
      <ChatFab />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
