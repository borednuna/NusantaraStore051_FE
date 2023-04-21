import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import Chat from './infrastructure/components/chat/chat';
import Feedback from './presentation/pages/feedback/feedback';

function App() {
  return (
    <div className="App">
      <Chat />
      <Header />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
