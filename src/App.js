import './App.css';
import DragZone from './components/DragZone';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {


  return (
    <div className=" text-center flex flex-col justify-between">
      <Header />
      <DragZone />
      <Footer />
    </div>
  );
}

export default App;
