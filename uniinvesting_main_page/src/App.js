import './App.css';
import Header from './components/header';
import Scroll_section_one from './components/scroll-section-one';
import Scroll_section_two from './components/scroll-section-two';
import Scroll_section_three from './components/scroll-section-three';
import Finance_tracker from './components/finance_tracker';
import Footer from './components/data/footer';
import Popup from './components/popup';

function App() {
  return (
    <div className="App">
      <Header />
      <Scroll_section_one />
      <Scroll_section_two />
      <Scroll_section_three />
      <Finance_tracker />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
