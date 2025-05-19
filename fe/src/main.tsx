import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import MusicGroundLayout from './components/layouts/music-ground-layout';
import './index.css';
import MusicPlayer from './pages/music-player-screen';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MusicGroundLayout>
              <App />
            </MusicGroundLayout>
          }
        />
        <Route path="/play" element={<MusicPlayer />} />
      </Routes>
    </Router>
  </QueryClientProvider>,
);
