import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox ';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  const toggleShow = () => {
    setShowForm(!showForm);
  };

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodList, newFood];
    setFoodList(updatedFoods);
    setSearchFood(updatedFoods);
  };

  const searchFilter = (search) => {
    let filteredFood = foodList.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFood(filteredFood);
  };

  const deleteFood = (foodName) => {
    const filteredFood = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setFoodList(filteredFood);
    setSearchFood(filteredFood);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <button onClick={toggleShow}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </button>
      {showForm && <AddFoodForm addNewFood={addNewFood} />}

      <SearchBar searchFilter={searchFilter} />

      {searchFood.map((food) => {
        return (
          <div>
            {/* <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            /> */}
            <FoodBox food={food} clickToDelete={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
