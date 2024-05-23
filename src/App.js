import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/css/index.css'
import Mynavbar from './components/navbar' 
import MyForm from './components/form';

function App() {
  return (
    <div className="App">
        <Mynavbar/>
        <MyForm/>
    </div>
  );
}

export default App;
