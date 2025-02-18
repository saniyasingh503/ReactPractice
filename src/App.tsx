import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Button from './components/Button';
import Header from './components/Header';
import Product from './models/Product';
import Search from './components/Search';



export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => { }
});

// const productData: Product[] = [{
//   "id": 1,
//   "name": "Addidas Shoe",
//   "unitprice": 8000
// },
// {
//   "id": 2,
//   "name": "Puma Shoe",
//   "unitprice": 7000
// }];


export default function App() {
  const [theme, setTheme] = useState("light");
  const [productList, setProductList] = useState<Product[]>([]);
  const [originalProductList, setOriginalProductList] = useState<Product[]>([]);

  const toggleTheme = () => { setTheme(theme == "dark" ? "light" : "dark") };

  const filterProductData = (matchValue: string) => {
    if (!matchValue.trim()) {
      setProductList(originalProductList);
    } else {
      setProductList(originalProductList.filter(p => p.title.toLowerCase().includes(matchValue.toLowerCase())));
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if(response.ok) {
        const data = await response.json();
        setProductList(data);
        setOriginalProductList(data);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <Search onSearch={filterProductData} />
        <h1>Welcome to my app</h1>
        <Cart products={productList} />
      </ThemeContext.Provider>
    </div>
  );
}

