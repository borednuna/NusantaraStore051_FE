import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import ChatFab from './infrastructure/components/chat_fab/chat_fab';
import Feedback from './presentation/pages/feedback/feedback';

function App() {
  return (
    <div className="App">
      <ChatFab />
      <Header />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
