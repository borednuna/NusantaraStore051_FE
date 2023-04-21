import './App.scss';
import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import ChatFab from './infrastructure/components/chat_fab/chat_fab';
import ProfilePage from './presentation/pages/profile_page/profile_page';

function App() {
  return (
    <div className="App">
      <ChatFab />
      <Header />
      <ProfilePage />
      <Footer />
    </div>
  );
}

export default App;
