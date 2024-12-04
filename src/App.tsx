import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShiftRequestPage from './pages/ShiftRequestPage';
import MetricsPage from './pages/MetricsPage';
import PageTemplate from './components/PageTemplate';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={
        <PageTemplate title="About Us">
          <AboutPage />
        </PageTemplate>
      } />
      <Route path="/shift-request" element={
        <PageTemplate title="Shift Request">
          <ShiftRequestPage />
        </PageTemplate>
      } />
      <Route path="/metrics" element={
        <PageTemplate title="Metrics">
          <MetricsPage />
        </PageTemplate>
      } />
    </Routes>
  );
}