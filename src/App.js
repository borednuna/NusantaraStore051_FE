import './App.scss';
import Header from './infrastructure/components/header/header';
import Banner from './infrastructure/components/banner/banner';
import CategoryList from './infrastructure/components/category_list/category_list';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CategoryList />
    </div>
  );
}

export default App;
