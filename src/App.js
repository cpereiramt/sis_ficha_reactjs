import React from 'react';
import Main from './Pages/Main';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import {useRoutes} from 'hookrouter';
import './app.css';

function App() {
  const routes = {
    '/': () => <Home />,
    '/TelaPrincipal': (props) => <Main data={props} />,
   
};
const routeResult = useRoutes(routes);
  return routeResult || <><NotFound/></>;
}
export default App;
