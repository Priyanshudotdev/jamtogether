import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import MusicPlayer from './pages/MusicPlayer';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/play" element={<MusicPlayer />} />
      </Routes>
    </Router>
  </QueryClientProvider>,
  // </StrictMode>,
);
