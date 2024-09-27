import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './styles/scss/style.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
