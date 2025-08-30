import { BrowserRouter as Router } from 'react-router-dom';
import NavigationHeader from './reusables/NavigationHeader';
import AnimatedRoutes from './AnimatedRoutes';
import './index.css';
import './pages.scss';

function App() {
  return (
    <Router>
      <NavigationHeader />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;