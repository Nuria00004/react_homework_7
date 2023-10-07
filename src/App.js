import './App.css';
import { Routes , Route} from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import Form from './pages/Form';
import Slider from './pages/Slider';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/> } />
          <Route path='form' element={<Form />} />
          <Route path="todo" element={<Todo />} />
          <Route path='slider' element={<Slider />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
