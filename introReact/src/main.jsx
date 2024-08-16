import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Features from './components/features.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Features />
  </StrictMode>,
);
