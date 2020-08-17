import React from 'react';
import Main from './Pages/Main';
import Home from './components/Home';
import NotFound from './Pages/NotFound';
import {useRoutes} from 'hookrouter';

function App() {
  const routes = {
    '/': () => <Home />,
    '/TelaPrincipal': () => <Main />,
   
};
const routeResult = useRoutes(routes);
  return routeResult || <><NotFound/></>;
}
export default App;
