import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import MealDescription from './pages/mealDescription';

function App() {
	return (
		<div className='App'>
			<Navbar>
				<SearchBox />
			</Navbar>
		<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/mealDescription/:idMeal" element={<MealDescription />} />
        </Routes>
		</div>
	);
}

export default App;
