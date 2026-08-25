import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css';
import './pages.scss';

// -- Swiper Modules -- //
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)