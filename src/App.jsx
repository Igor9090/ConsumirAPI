import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';


import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import Header from './components/Header';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
