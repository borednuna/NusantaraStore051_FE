import './App.scss';
import Header from './infrastructure/components/header/header';
import Banner from './infrastructure/components/banner/banner';
import CategoryList from './infrastructure/components/category_list/category_list';
import Card from './infrastructure/components/card/card';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Banner />
      <CategoryList /> */}
      <Card />
    </div>
  );
}

export default App;
