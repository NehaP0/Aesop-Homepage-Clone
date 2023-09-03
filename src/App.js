import logo from './logo.svg';
import './App.css';
import AboveNav from './components/AboveNav';
import Navbar from './components/Navbar';
import Mainbrown from './components/Mainbrown';
import Body from './components/Body';
import Athenaeum from './components/Athenaeum';
import Skin from './components/Skin';
import PostPoo from './components/PostPoo';
import Home from './components/Home';
import Store from './components/Store';
import Quote from './components/Quote';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <AboveNav />
      <Navbar />
      <Mainbrown />
      <Body />
      <Athenaeum />
      <Skin />
      <PostPoo />
      <Home />
      <Store />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
