import './App.css';
import Hero from './Hero/Hero';
import Topbar from './Topbar/Topbar';
import Body from './Body/Body';
import Built from './Built/Built';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Hero />
      <Body />
      <Built />
      <Footer />
    </div>
  );
}

export default App;
