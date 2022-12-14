import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/pages/Home';


function App() {
return (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>       
      </Routes>
    </Router>

  </Provider>
);
}

export default App;
