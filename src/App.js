import './App.css';
import Todolist from './components/Todolist';



function App() {


  return (
    <div className=" text-center">
      <header className="  bg-mainBg flex items-center justify-center h-16 ">
        <h1>TODOLIST</h1>
      </header>
      <main>
        <Todolist />
      </main>
      <footer
        className='text-white h-16 absolute bottom-0 w-full  bg-mainBg flex  items-center justify-center'>
        <p>Todolist by JD - 2023</p>
      </footer>
    </div>
  );
}

export default App;
