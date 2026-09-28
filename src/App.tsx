/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DailyStockPage from './pages/DailyStockPage';
import CmemsPage from './pages/CmemsPage';
import RgmPage from './pages/RgmPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/dailystock" element={<DailyStockPage />} />
        <Route path="/projects/cmems" element={<CmemsPage />} />
        <Route path="/projects/rgm" element={<RgmPage />} />
        
        {/* 路由别名兼容 */}
        <Route path="/dailystock" element={<Navigate to="/projects/dailystock" replace />} />
        <Route path="/cmems" element={<Navigate to="/projects/cmems" replace />} />
        <Route path="/rgm" element={<Navigate to="/projects/rgm" replace />} />
        
        {/* 全局回退 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
