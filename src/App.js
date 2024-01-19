import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums';
import Artist from './components/Artist';
import Favourites from './components/Favourites';
import Home from './components/Home';
import NavBarTop from './components/NavBarTop';
import Player from './components/Player';
import Side from './components/Side';

function App() {
	return (
		<>
			<Side />
			<Player />
			<NavBarTop />

			<div className='verde' style={{ marginLeft: 230 + 'px' }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/album/:id' element={<Albums />} />
						<Route path='/artist/:id' element={<Artist />} />
						<Route path='/favourites' element={<Favourites />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
