/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './components/LandingPage';
import SkillDetail from './components/SkillDetail';
import CoderLitePage from './components/CoderLitePage';
import { VaultPage } from './components/VaultPage';
import { AuthPage } from './components/AuthPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vault" element={<VaultPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/skill/ux-researcher-pro" element={<SkillDetail />} />
        <Route path="/skill/coder-lite" element={<CoderLitePage />} />
      </Routes>
    </BrowserRouter>
  );
}
