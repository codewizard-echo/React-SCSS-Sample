import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import DefaultLayout from './layout/DefaultLayout';

import './styles/app.scss';

export default function App() {
  return (
    <>
      <Router>
        {/* Define the routes using the <Route> component */}
        <Routes>
          <Route path="/" element={<DefaultLayout />} >
            {
              routes.map(({path, component: Component}, idx) => (
                <Route path={path} element={<Component />} key={idx} />
              ))
            }
          </Route>
        </Routes>
      </Router>    
    </>
  )
}
