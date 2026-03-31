import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import TopAlbums from './components/TopAlbums/TopAlbums';
import NewAlbums from './components/NewAlbums/NewAlbums';
import Songs from './components/Songs/Songs';


function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <TopAlbums/>
      <NewAlbums/>
      <Songs/>
    </div>
  );
}

export default App;
