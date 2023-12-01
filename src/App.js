import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Dishes from './components/dishes/Dishes';
import Filter from './components/filter/Filter';
import FoodData from './datafile/Dishes'
import Banner from './datafile/Banner'
import Category from './datafile/Categories'
import { useState, useEffect } from 'react';

function App() {

  const [dishes, setDishes] = useState(FoodData);
  const [banner, setBanner] = useState(Banner);
  const [categories, setCategories] = useState(Category);
  const [searchItem, setSearchItem] = useState()
  const [price, setPrice] = useState();
  const [timeout, setTimeout] = useState(8000);



  //console.log(dishes);

  const setSearch = (searchValue) => {
    setSearchItem(searchValue)
    //console.log(searchValue);
  }

  const getPrice = (priceValue) => {
    setPrice(priceValue)
    //console.log(priceValue)
  }


  let filteredDishes;


  useEffect(() => {

    filteredDishes = FoodData;

    if (searchItem) {
      filteredDishes = filteredDishes.filter((dish) => dish.name.toLowerCase().includes(searchItem.toLowerCase()))
      setTimeout(0)

    }

    if (price) {
      if (price == 'asc') {
        filteredDishes = filteredDishes.sort((a, b) => {
          return b.price - a.price
        })
      } else {
        filteredDishes = filteredDishes.sort((a, b) => {
          return a.price - b.price
        })
      }


      setTimeout(0)
    }




    setDishes(filteredDishes);
    //console.log(dishes);

  }, [searchItem, price])


  return (
    <div className="food_app">
      <Navbar />
      <Header banner={banner} />
      <Categories cate={categories} />
      <Filter getSearch={setSearch} getPrice={getPrice} />
      <Dishes dish={dishes} timeout={timeout} />

    </div>
  );
}

export default App;
