import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  

  return (
    <Provider store={store}>
      <Navbar/>
      <Body/>
      
    </Provider>
  );
}

export default App;
