import { Routes, Route } from 'react-router-dom'

import AllStock from './pages/AllStock';
import FavoritesStock from './pages/FavoritesStock';
import RecentStock from './pages/RecentStock';
import Home from './pages/Home';
import NavigateBar from './layout/NavigateBar';

function App() {
  return (
    <div>
      <NavigateBar />
      <Routes>
        <Route path='/' element={<Home />}>
          
          <Route path='/favorites' element={<FavoritesStock/>} />
          <Route path='/recent' element={<RecentStock/>}/>
          <Route path='/all' element={<AllStock/>}/>
          
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
