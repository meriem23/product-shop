import './App.css';
import ProductList from './components/ProductList';
import AddProduct from "./components/AddProduct"
import SearchProduct from './components/SearchProduct';

function App() {
  return (
    <div className="App-header">
      <div>
        <AddProduct />
        <SearchProduct />
      </div>
      <ProductList />
    </div>
  );
}

export default App;
